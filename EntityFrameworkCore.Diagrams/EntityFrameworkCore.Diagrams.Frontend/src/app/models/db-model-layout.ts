import { DbModel } from './db-model';
import { DbEntity } from './db-entity';
import { DbEntityLayout } from './db-entity-layout';
import { DbEntityRelationLayout } from './db-entity-relation-layout';
import { IScaleInfo, DEFAULT_SCALE } from '../directives/scalable.directive';

let entityKeyCounter = 0;

export class DbModelLayout {
    readonly entities: DbEntityLayout[] = [];
    readonly relations: DbEntityRelationLayout[] = [];

    currentScale: IScaleInfo = { scale: DEFAULT_SCALE };

    constructor(public readonly model: DbModel) {
        for (const entity of model.entities) {
            for (const fk of entity.foreignKeys) {
                this.relations.push(new DbEntityRelationLayout(entity, fk));
            }
        }
    }

    getEntityLayout(entity: DbEntity): DbEntityLayout {
        let result = this.entities.filter(e => e.entity.equals(entity))[0];
        if (!result) {
            result = new DbEntityLayout(entity, ++entityKeyCounter);
            this.entities.push(result);
        }
        return result;
    }
}
