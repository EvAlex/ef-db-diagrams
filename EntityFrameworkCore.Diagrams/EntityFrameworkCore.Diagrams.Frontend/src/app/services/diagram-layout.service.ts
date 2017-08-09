import { Injectable } from '@angular/core';

import { DbModelLayout } from '../models/db-model-layout';
import { DbEntityLayout } from '../models/db-entity-layout';
import { DbEntityProperty } from '../models/db-entity-property';
import { DbEntityRelationLayout } from '../models/db-entity-relation-layout';
import { DbModel } from '../models/db-model';
import { DbEntity } from '../models/db-entity';
import { Point } from '../models/point';
import { Line } from '../models/line';
import { DbEntityRelationConnector, Direction } from '../models/db-entity-relation-connector';
import { DbModelLayoutDto } from '../models/dto/db-model-layout-dto';
import { DbDiagramDto } from '../models/dto/db-diagram-dto';

const MIN_RELATION_EDGE = 16;

const ENTITY_ZINDEX_NORMAL = 10;
const ENTITY_ZINDEX_ACTIVE = 11;
const ENTITY_ZINDEX_HOVER = 12;
const ENTITY_ZINDEX_DRAG = 13;
const RELATION_ZINDEX_NORMAL = 5;
const RELATION_ZINDEX_HOVER = 6;

const LOCAL_STORAGE_KEY_MODEL_LAYOUT = 'ModelLayout';

@Injectable()
export class DiagramLayoutService {
    private readonly _modelLayouts: DbModelLayout[] = [];

    get hoveredRelation(): DbEntityRelationLayout { return this._hoveredRelation; }
    set hoveredRelation(value: DbEntityRelationLayout) {
        if (this._hoveredRelation) {
            this._hoveredRelation.zIndex = RELATION_ZINDEX_NORMAL;
        }
        if (value) {
            value.zIndex = RELATION_ZINDEX_HOVER;
        }
        this._hoveredRelation = value;

        if (this._hoveredEntity) {
            this._hoveredEntity.zIndex = this._hoveredEntity === this._activeEntity
                ? ENTITY_ZINDEX_ACTIVE
                : ENTITY_ZINDEX_NORMAL;
        }
        this._hoveredEntity = null;
    }
    private _hoveredRelation: DbEntityRelationLayout = null;

    get hoveredEntity(): DbEntityLayout { return this._hoveredEntity; }
    set hoveredEntity(value: DbEntityLayout) {
        if (this._hoveredEntity) {
            this._hoveredEntity.zIndex = this._hoveredEntity === this._activeEntity
                ? ENTITY_ZINDEX_ACTIVE
                : ENTITY_ZINDEX_NORMAL;
        }
        if (value) {
            value.zIndex = ENTITY_ZINDEX_HOVER;
        }
        this._hoveredEntity = value;

        if (this._hoveredRelation) {
            this._hoveredRelation.zIndex = RELATION_ZINDEX_NORMAL;
        }
        this._hoveredRelation = null;
    }
    private _hoveredEntity: DbEntityLayout = null;

    get activeEntity() { return this._activeEntity; }
    set activeEntity(value: DbEntityLayout) {
        if (this._activeEntity) {
            this._activeEntity.zIndex = this._hoveredEntity === this._activeEntity
                ? ENTITY_ZINDEX_HOVER
                : ENTITY_ZINDEX_NORMAL;
        }
        if (value) {
            value.zIndex = ENTITY_ZINDEX_ACTIVE;
        }
        this._activeEntity = value;
    }
    private _activeEntity: DbEntityLayout = null;

    get draggedEntity() { return this._draggedEntity; }
    set draggedEntity(value: DbEntityLayout) {
        if (this._draggedEntity) {
            this.activeEntity = this._draggedEntity;
        }
        if (value) {
            value.zIndex = ENTITY_ZINDEX_DRAG;
        }
        this._draggedEntity = value;
    }
    private _draggedEntity: DbEntityLayout = null;

    constructor() {

    }

    moveEntity(model: DbModel, entity: DbEntity, x: number, y: number) {
        const modelLayout = this.getModelLayout(model);

        const entityLayout = modelLayout.getEntityLayout(entity);
        entityLayout.x = x;
        entityLayout.y = y;

        const affectedRelations = modelLayout.relations
            .filter(e => e.principalEntity.equals(entity) || e.dependentEntity.equals(entity));

        for (const relation of affectedRelations) {
            this.layoutRelation(modelLayout, relation);

            if (entityLayout.collapsed) {
                this.setEntityCollapsed(modelLayout, entityLayout);
            }
        }
    }

    toggleEntityCollapsed(model: DbModel, entity: DbEntity) {
        const modelLayout = this.getModelLayout(model);
        const entityLayout = modelLayout.getEntityLayout(entity);

        if (entityLayout.collapsed) {
            this.setEntityExpanded(modelLayout, entityLayout);
        } else {
            this.setEntityCollapsed(modelLayout, entityLayout);
        }
    }

    private setEntityExpanded(modelLayout: DbModelLayout, entityLayout: DbEntityLayout) {
        entityLayout.collapsed = false;

        const affectedPrincipalRelations = modelLayout.relations
            .filter(e => e.principalEntity.equals(entityLayout.entity));
        for (const relation of affectedPrincipalRelations) {
            relation.expandConnector(relation.principalConnector);
        }
        const affectedDependentRelations = modelLayout.relations
            .filter(e => e.dependentEntity.equals(entityLayout.entity));
        for (const relation of affectedDependentRelations) {
            relation.expandConnector(relation.dependentConnector);
        }
    }

    private setEntityCollapsed(modelLayout: DbModelLayout, entityLayout: DbEntityLayout) {
        entityLayout.collapsed = true;

        const collapsedConnectorY = entityLayout.y + entityLayout.properties[0].y / 2;

        const affectedPrincipalRelations = modelLayout.relations
            .filter(e => e.principalEntity.equals(entityLayout.entity));
        for (const relation of affectedPrincipalRelations) {
            relation.collapseConnector(relation.principalConnector, collapsedConnectorY);
        }
        const affectedDependentRelations = modelLayout.relations
            .filter(e => e.dependentEntity.equals(entityLayout.entity));
        for (const relation of affectedDependentRelations) {
            relation.collapseConnector(relation.dependentConnector, collapsedConnectorY);
        }
    }

    arrangeLayout(model: DbModel) {
        const modelLayout = this.getModelLayout(model);
        function propsToString(entity: DbEntityLayout): string {
            return entity.properties
                .map(p => `    - ${p.property.name} (x: ${p.x}, y: ${p.y}, w: ${p.width}, h: ${p.height})`)
                .join('\n');
        }
        console.log(
            'arrangeLayout(). Entities:\n' +
            modelLayout.entities
                .map(e => `  - ${e.entity.shortName} (w: ${e.width}, h: ${e.height}):\n${propsToString(e)}`)
                .join('\n')
        );

        this.layoutEntities(modelLayout);

        for (const relation of modelLayout.relations) {
            this.layoutRelation(modelLayout, relation);
        }

        modelLayout.initialized = true;
    }

    private layoutEntities(modelLayout: DbModelLayout) {
        let linesCount = 0, aspectRatio = 100;
        while (modelLayout.entities.length > linesCount && aspectRatio > 16 / 9) {
            linesCount++;

            const lines: DbEntityLayout[][] = [];
            const count = Math.ceil(modelLayout.entities.length / linesCount);
            for (let i = 0; i < linesCount; i++) {
                const start = i * count;
                const line = modelLayout.entities.slice(start, start + count);
                if (line.length > 0) {
                    lines.push(line);
                }
            }
            const width = lines.map(e => e.reduce((p, c) => p + c.width, 0)).sort().reverse()[0];
            const height = lines.map(e => e.sort((a, b) => b.height - a.height)[0].height).reduce((p, c) => p + c);

            aspectRatio = width / height;
        }

        const minEntitiesMargin = 16 + 2 * MIN_RELATION_EDGE;
        const entitiesInLine = Math.ceil(modelLayout.entities.length / linesCount);
        let curX = 0, curY = 0, i = 0;
        for (const entity of modelLayout.entities) {
            entity.x = curX;
            entity.y = curY;
            entity.zIndex = ENTITY_ZINDEX_NORMAL;

            i++;
            if (i % entitiesInLine === 0) {
                curX = 0;
                curY += modelLayout.entities
                    .slice(i - entitiesInLine, i)
                    .sort((a, b) => b.height - a.height)[0].height + minEntitiesMargin;
            } else {
                curX += entity.width + minEntitiesMargin;
            }
        }
    }

    private layoutRelation(modelLayout: DbModelLayout, relation: DbEntityRelationLayout) {
        const principalEntity = modelLayout.getEntityLayout(relation.principalEntity);
        const dependentEntity = modelLayout.getEntityLayout(relation.dependentEntity);

        const principalConnectorWidth = this.getConnectorWidth(relation.principalProperties);
        const principalLeftConnectorExternalPointX = principalEntity.x - principalConnectorWidth;
        const principalRightConnectorExternalPointX = principalEntity.x + principalEntity.width + principalConnectorWidth;

        const dependentConnectorWidth = this.getConnectorWidth(relation.dependentProperties);
        const dependentLeftConnectorExternalPointX = dependentEntity.x - dependentConnectorWidth;
        const dependentRightConnectorExternalPointX = dependentEntity.x + dependentEntity.width + dependentConnectorWidth;

        let chosenPrincipalConnectorExternalPointX: number, chosenDependentConnectorExternalPointX: number;
        if (dependentRightConnectorExternalPointX <= principalLeftConnectorExternalPointX) {
            chosenPrincipalConnectorExternalPointX = principalLeftConnectorExternalPointX;
            chosenDependentConnectorExternalPointX = dependentRightConnectorExternalPointX;
        } else if (dependentLeftConnectorExternalPointX >= principalRightConnectorExternalPointX) {
            chosenPrincipalConnectorExternalPointX = principalRightConnectorExternalPointX;
            chosenDependentConnectorExternalPointX = dependentLeftConnectorExternalPointX;
        } else if (dependentLeftConnectorExternalPointX < principalLeftConnectorExternalPointX
            && dependentRightConnectorExternalPointX > principalLeftConnectorExternalPointX
        ) {
            chosenPrincipalConnectorExternalPointX = principalLeftConnectorExternalPointX;
            chosenDependentConnectorExternalPointX = dependentLeftConnectorExternalPointX;
        } else if (dependentLeftConnectorExternalPointX < principalRightConnectorExternalPointX
            && dependentRightConnectorExternalPointX > principalRightConnectorExternalPointX
        ) {
            chosenPrincipalConnectorExternalPointX = principalRightConnectorExternalPointX;
            chosenDependentConnectorExternalPointX = dependentRightConnectorExternalPointX;
        } else {
            chosenPrincipalConnectorExternalPointX = principalLeftConnectorExternalPointX;
            chosenDependentConnectorExternalPointX = dependentLeftConnectorExternalPointX;
        }

        const principalDirection = chosenPrincipalConnectorExternalPointX > principalLeftConnectorExternalPointX
            ? Direction.LeftToRight
            : Direction.RightToLeft;
        const dependentDirection = chosenDependentConnectorExternalPointX > dependentLeftConnectorExternalPointX
            ? Direction.LeftToRight
            : Direction.RightToLeft;

        relation.principalConnector = this.getRelationToEntityConnector(
            principalEntity,
            relation.principalProperties,
            dependentEntity,
            principalDirection
        );
        relation.dependentConnector = this.getRelationToEntityConnector(
            dependentEntity,
            relation.dependentProperties,
            principalEntity,
            dependentDirection
        );
        relation.connect();

        relation.zIndex = RELATION_ZINDEX_NORMAL;
    }

    private getConnectorWidth(relationProperties: DbEntityProperty[]): number {
        return relationProperties.length > 1
            ? 2 * MIN_RELATION_EDGE
            : MIN_RELATION_EDGE;
    }

    private getRelationToEntityConnector(
        entity: DbEntityLayout,
        relationProperties: DbEntityProperty[],
        otherEntity: DbEntityLayout,
        direction: Direction
    ): DbEntityRelationConnector {
        const result = new DbEntityRelationConnector();

        for (const prop of relationProperties) {
            const propLayout = entity.getPropertyLayout(prop);

            const p1x = direction === Direction.LeftToRight
                ? Math.max(entity.x + entity.width, entity.x + propLayout.x + propLayout.width)
                : entity.x;
            const p1y = entity.y + propLayout.y + propLayout.height / 2;
            const p1 = new Point(p1x, p1y);

            const p2x = direction === Direction.LeftToRight
                ? p1.x + MIN_RELATION_EDGE
                : p1.x - MIN_RELATION_EDGE;
            const p2y = p1y;
            const p2 = new Point(p2x, p2y);

            result.lines.push(new Line(p1, p2));
        }

        if (result.lines.length > 1) {
            result.lines.sort((a, b) => a.p1.y - b.p1.y);

            const leftX = result.lines[0].left.x;
            const rightX = result.lines[0].right.x;
            const bottomY = result.lines[result.lines.length - 1].p1.y;
            const topY = result.lines[0].p1.y;

            const vcX = direction === Direction.LeftToRight ? rightX : leftX;
            const vcY1 = topY;
            const vcY2 = bottomY;
            const verticalLine = new Line(new Point(vcX, vcY1), new Point(vcX, vcY2));
            result.lines.push(verticalLine);

            const hcX1 = vcX;
            const hcX2 = direction === Direction.LeftToRight
                ? vcX + MIN_RELATION_EDGE
                : vcX - MIN_RELATION_EDGE;
            const hcY = topY + (bottomY - topY) / 2;
            const horizontalLine = new Line(new Point(hcX1, hcY), new Point(hcX2, hcY));
            result.lines.push(horizontalLine);

            result.externalPoint = horizontalLine.p2;
        } else {
            result.externalPoint = direction === Direction.LeftToRight
                ? result.lines[0].right
                : result.lines[0].left;
        }

        return result;
    }

    getEntityLayout(model: DbModel, entity: DbEntity): DbEntityLayout {
        const modelLayout = this.getModelLayout(model);
        const entityLayout = modelLayout.getEntityLayout(entity);
        return entityLayout;
    }

    getModelLayout(model: DbModel): DbModelLayout {
        let result = this._modelLayouts.filter(e => e.model === model)[0];
        if (!result) {
            result = new DbModelLayout(model);
            this._modelLayouts.push(result);
        }
        return result;
    }

    getModelLayouts(): DbModelLayout[] {
        return this._modelLayouts.slice();
    }

    saveLayout(model: DbModel) {
        const dto = this.exportLayout(model);
        const dtoStr = JSON.stringify(dto);
        localStorage.setItem(LOCAL_STORAGE_KEY_MODEL_LAYOUT, dtoStr);
    }

    restoreLayout(model: DbModel) {
        const dtoStr = localStorage.getItem(LOCAL_STORAGE_KEY_MODEL_LAYOUT);
        if (dtoStr) {
            this.importDiagram(model, dtoStr);
        }
    }

    exportLayout(model: DbModel): DbDiagramDto {
        const modelLayout = this.getModelLayout(model);
        const dto = new DbDiagramDto(null, modelLayout.toDto());
        return dto;
    }

    exportModelWithLayout(model: DbModel): DbDiagramDto {
        const modelLayout = this.getModelLayout(model);
        const dto = new DbDiagramDto(model, modelLayout.toDto());
        return dto;
    }

    importDiagram(model: DbModel, jsonStr: string): DbModel {
        const modelLayout = this.getModelLayout(model);
        const dtoObj = JSON.parse(jsonStr);
        const dto = DbDiagramDto.fromJSON(dtoObj);
        if (dto.model) {
            model = dto.model;
        }
        if (dto.layout) {
            modelLayout.applyLayout(dto.layout);
        }
        return model;
    }

}
