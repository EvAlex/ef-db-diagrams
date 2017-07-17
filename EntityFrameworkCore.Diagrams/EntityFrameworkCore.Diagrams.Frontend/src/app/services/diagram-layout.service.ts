import { Injectable } from '@angular/core';

import { DbModelLayout } from '../models/db-model-layout';
import { DbEntityLayout } from '../models/db-entity-layout';
import { DbModel } from '../models/db-model';
import { DbEntity } from '../models/db-entity';

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
