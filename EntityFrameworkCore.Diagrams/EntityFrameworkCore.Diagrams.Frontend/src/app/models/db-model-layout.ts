import { DbModel } from './db-model';
import { DbEntity } from './db-entity';
import { DbEntityLayout } from './db-entity-layout';
import { DbEntityRelationLayout } from './db-entity-relation-layout';

export class DbModelLayout {
    readonly entities: DbEntityLayout[] = [];
    readonly relations: DbEntityRelationLayout[] = [];

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
            result = new DbEntityLayout(entity);
            this.entities.push(result);
        }
        return result;
    }
}
