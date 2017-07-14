import { DbEntity } from './db-entity';

export class DbModel {
    entities: DbEntity[] = [];

    static fromJSON(obj: Object): DbModel {
        return Object.assign(new DbModel(), { entities: obj['entities'].map(e => DbEntity.fromJSON(e) ) })
    }
}
