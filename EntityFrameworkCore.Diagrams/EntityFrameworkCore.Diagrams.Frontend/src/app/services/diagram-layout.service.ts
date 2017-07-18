import { Injectable } from '@angular/core';

import { DbModelLayout } from '../models/db-model-layout';
import { DbEntityLayout } from '../models/db-entity-layout';
import { DbEntityProperty } from '../models/db-entity-property';
import { DbEntityRelationLayout } from '../models/db-entity-relation-layout';
import { DbModel } from '../models/db-model';
import { DbEntity } from '../models/db-entity';
import { Point } from '../models/point';
import { Line } from '../models/line';

const minRelationEdge = 16;

@Injectable()
export class DiagramLayoutService {
    private readonly _modelLayouts: DbModelLayout[] = [];

    constructor() {

    }

    arrangeLayout(model: DbModel) {
        const modelLayout = this.getModelLayout(model);
        console.log(
            'arrangeLayout(). Entities:\n' +
            modelLayout.entities.map(e => `  - ${e.entity.shortName} (${e.width}, ${e.height})`).join('\n')
        );

        const margin = 16;
        let curX = 0, curY = 0;
        for (const entity of modelLayout.entities) {
            entity.x = curX;
            entity.y = curY;
            curX += entity.width + margin;
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
            const lines: Line[] = [
                ...this.getRelationToEntityConnectorLines(principalEntity, relation.principalProperties, principalIsLeftmost),
                ...this.getRelationToEntityConnectorLines(dependentEntity, relation.dependentProperties, !principalIsLeftmost)
            ];

            relation.path = lines;
        }

    }

    private getRelationToEntityConnectorLines(entity: DbEntityLayout, relationProperties: DbEntityProperty[], toTheRight: boolean): Line[] {
        const lines: Line[] = [];

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

            lines.push(new Line(p1, p2));
        }

        if (lines.length > 1) {
            lines.sort((a, b) => a.p2.y - b.p2.y);

            const vcX = toTheRight ? lines[0].right.x : lines[0].left.x;
            const vcY1 = lines[0].p1.y;
            const vcY2 = lines[lines.length - 1].p1.y;
            const vertConnector = new Line(new Point(vcX, vcY1), new Point(vcX, vcY2));

            const hcX1 = vcX;
            const hcX2 = toTheRight ? vcX + minRelationEdge : vcX - minRelationEdge;
            const hcY = (vcY2 - vcY1) / 2;
            const horConnector = new Line(new Point(hcX1, hcY), new Point(hcX2, hcY));

            lines.push(vertConnector, horConnector);
        }

        return lines;
    }

    getEntityLayout(model: DbModel, entity: DbEntity): DbEntityLayout {
        const modelLayout = this.getModelLayout(model);
        const entityLayout = modelLayout.getEntityLayout(entity);
        return entityLayout;
    }

    private getModelLayout(model: DbModel): DbModelLayout {
        let result = this._modelLayouts.filter(e => e.model === model)[0];
        if (!result) {
            result = new DbModelLayout(model);
            this._modelLayouts.push(result);
        }
        return result;
    }

}
