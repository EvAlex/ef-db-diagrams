import { Injectable } from '@angular/core';

import { DbModelLayout } from '../models/db-model-layout';
import { DbEntityLayout } from '../models/db-entity-layout';
import { DbEntityProperty } from '../models/db-entity-property';
import { DbEntityRelationLayout } from '../models/db-entity-relation-layout';
import { DbModel } from '../models/db-model';
import { DbEntity } from '../models/db-entity';
import { Point } from '../models/point';
import { Line } from '../models/line';
import { DbEntityRelationConnector } from '../models/db-entity-relation-connector';

const minRelationEdge = 16;
const ENTITY_ZINDEX_NORMAL = 10;
const ENTITY_ZINDEX_HOVER = 11;
const RELATION_ZINDEX_NORMAL = 5;
const RELATION_ZINDEX_HOVER = 6;

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
            this._hoveredEntity.zIndex = ENTITY_ZINDEX_NORMAL;
        }
        this._hoveredEntity = null;
    }
    private _hoveredRelation: DbEntityRelationLayout = null;

    get hoveredEntity(): DbEntityLayout { return this._hoveredEntity; }
    set hoveredEntity(value: DbEntityLayout) {
        if (this._hoveredEntity) {
            this._hoveredEntity.zIndex = ENTITY_ZINDEX_NORMAL;
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

    constructor() {

    }

    arrangeLayout(model: DbModel) {
        const modelLayout = this.getModelLayout(model);
        console.log(
            'arrangeLayout(). Entities:\n' +
            modelLayout.entities.map(e => `  - ${e.entity.shortName} (${e.width}, ${e.height})`).join('\n')
        );

        const minEntitiesMargin = 16 + 2 * minRelationEdge;
        let curX = 0, curY = 0;
        for (const entity of modelLayout.entities) {
            entity.x = curX;
            entity.y = curY;
            curX += entity.width + minEntitiesMargin;

            entity.zIndex = ENTITY_ZINDEX_NORMAL;
        }

        for (const relation of modelLayout.relations) {
            const principalEntity = modelLayout.getEntityLayout(relation.principalEntity);
            const dependentEntity = modelLayout.getEntityLayout(relation.dependentEntity);
            const leftEntity = principalEntity.x < dependentEntity.x ? principalEntity : dependentEntity;
            const rightEntity = principalEntity.x < dependentEntity.x ? dependentEntity : principalEntity;

            const principalEntityCenter = new Point(
                principalEntity.x + principalEntity.width / 2,
                principalEntity.y + principalEntity.height / 2
            );
            const dependentEntityCenter = new Point(
                dependentEntity.x + dependentEntity.width / 2,
                dependentEntity.y + dependentEntity.height / 2
            );

            const principalIsLeftmost = principalEntityCenter.x < dependentEntityCenter.x;

            relation.principalConnector =
                this.getRelationToEntityConnector(principalEntity, relation.principalProperties, principalIsLeftmost);
            relation.dependentConnector =
                this.getRelationToEntityConnector(dependentEntity, relation.dependentProperties, !principalIsLeftmost);
            relation.path.push(
                relation.principalConnector.externalPoint,
                new Point(relation.principalConnector.externalPoint.x, relation.dependentConnector.externalPoint.y),
                relation.dependentConnector.externalPoint
            );

            relation.zIndex = RELATION_ZINDEX_NORMAL;
        }

    }

    private getRelationToEntityConnector(
        entity: DbEntityLayout,
        relationProperties: DbEntityProperty[],
        toTheRight: boolean
    ): DbEntityRelationConnector {
        const result = new DbEntityRelationConnector();

        for (const prop of relationProperties) {
            const propLayout = entity.getPropertyLayout(prop);

            const p1x = toTheRight
                ? Math.max(entity.x + entity.width, entity.x + propLayout.x + propLayout.width)
                : entity.x;
            const p1y = entity.y + propLayout.y + propLayout.height / 2;
            const p1 = new Point(p1x, p1y);

            const p2x = toTheRight ? p1.x + minRelationEdge : p1.x - minRelationEdge;
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

            const vcX = toTheRight ? rightX : leftX;
            const vcY1 = topY;
            const vcY2 = bottomY;
            const verticalLine = new Line(new Point(vcX, vcY1), new Point(vcX, vcY2));
            result.lines.push(verticalLine);

            const hcX1 = vcX;
            const hcX2 = toTheRight ? vcX + minRelationEdge : vcX - minRelationEdge;
            const hcY = topY + (bottomY - topY) / 2;
            const horizontalLine = new Line(new Point(hcX1, hcY), new Point(hcX2, hcY));
            result.lines.push(horizontalLine);

            result.externalPoint = horizontalLine.p2;
        } else {
            result.externalPoint = toTheRight ? result.lines[0].right : result.lines[0].left;
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

}
