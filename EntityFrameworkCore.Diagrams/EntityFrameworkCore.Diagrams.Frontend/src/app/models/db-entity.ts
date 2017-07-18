import { ClrType } from './clr-type';
import { DbEntityProperty } from './db-entity-property';
import { DbEntityKey } from './db-entity-key';
import { DbEntityForeignKey } from './db-entity-foreign-key';
import { DbEntityIndex } from './db-entity-index';

export class DbEntity {
    name: string;
    clrType: ClrType;
    properties: DbEntityProperty[] = [];
    keys: DbEntityKey[] = [];
    foreignKeys: DbEntityForeignKey[] = [];
    indexes: DbEntityIndex[] = [];

    get shortName() { return this.name.split('.').reverse()[0]; }

    static fromJSON(obj: Object): DbEntity {
        return Object.assign(new DbEntity(), obj, {
            clrType: ClrType.fromJSON(obj['clrType']),
            properties: obj['properties'].map(e => DbEntityProperty.fromJSON(e)),
            keys: obj['keys'].map(e => DbEntityKey.fromJSON(e)),
            foreignKeys: obj['foreignKeys'].map(e => DbEntityForeignKey.fromJSON(e)),
            indexes: obj['indexes'].map(e => DbEntityIndex.fromJSON(e)),
        });
    }

    equals(other: DbEntity): boolean {
        return other instanceof DbEntity && (
            this === other
            || this.name === other.name
            && this.clrType.equals(other.clrType)
        );
    }
}
