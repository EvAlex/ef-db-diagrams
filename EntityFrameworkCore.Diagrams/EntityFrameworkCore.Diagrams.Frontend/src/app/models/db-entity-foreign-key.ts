import { DbEntity } from './db-entity';
import { DbEntityKey } from './db-entity-key';
import { DbEntityProperty } from './db-entity-property';

export class DbEntityForeignKey {
    principalEntity: DbEntity;
    principleKey: DbEntityKey;
    properties: DbEntityProperty[] = [];

    static fromJSON(obj: Object): DbEntityForeignKey {
        return Object.assign(new DbEntityForeignKey(), {
            principalEntity: DbEntity.fromJSON(obj['principalEntity']),
            principleKey: DbEntityKey.fromJSON(obj['principleKey']),
            properties: obj['properties'].map(e => DbEntityProperty.fromJSON(e)),
        });
    }
}
