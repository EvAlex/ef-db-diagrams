import { DbModel } from './db-model';
import { DbEntity } from './db-entity';
import { DbEntityLayout } from './db-entity-layout';

export class DbModelLayout {
    readonly entities: DbEntityLayout[] = [];

    constructor(public readonly model: DbModel) {
    }

    getEntityLayout(entity: DbEntity): DbEntityLayout {
        let result = this.entities.filter(e => e.entity === entity)[0];
        if (!result) {
            result = new DbEntityLayout(entity);
            this.entities.push(result);
        }
        return result;
    }
}
