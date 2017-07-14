import { DbEntityProperty } from './db-entity-property';

export class DbEntityIndex {
    properties: DbEntityProperty[] = [];
    isUnique: boolean;

    static fromJSON(obj: Object): DbEntityIndex {
        return Object.assign(new DbEntityIndex(), obj, {
            properties: obj['properties'].map(e => DbEntityProperty.fromJSON(e))
        });
    }
}
