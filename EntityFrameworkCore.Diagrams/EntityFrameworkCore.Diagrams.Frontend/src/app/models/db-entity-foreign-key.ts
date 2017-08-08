import { DbEntity } from './db-entity';
import { DbEntityKey } from './db-entity-key';
import { DbEntityProperty } from './db-entity-property';

export class DbEntityForeignKey {
    principalEntity: DbEntity;
    principalKey: DbEntityKey;
    properties: DbEntityProperty[] = [];

    static fromJSON(obj: Object): DbEntityForeignKey {
        return Object.assign(new DbEntityForeignKey(), obj, {
            principalEntity: DbEntity.fromJSON(obj['principalEntity']),
            principalKey: DbEntityKey.fromJSON(obj['principalKey']),
            properties: (obj['properties'] || []).map(e => DbEntityProperty.fromJSON(e)),
        });
    }
}
