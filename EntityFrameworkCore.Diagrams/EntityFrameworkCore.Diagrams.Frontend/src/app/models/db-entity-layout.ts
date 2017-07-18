import { DbEntity } from './db-entity';
import { DbEntityPropertyLayout } from './db-entity-property-layout';
import { DbEntityProperty } from './db-entity-property';

export class DbEntityLayout {
    x: number = null;
    y: number = null;
    width: number = null;
    height: number = null;

    readonly properties: DbEntityPropertyLayout[] = [];

    constructor(public readonly entity: DbEntity) {
    }

    getPropertyLayout(property: DbEntityProperty): DbEntityPropertyLayout {
        let result = this.properties.filter(e => e.property.equals(property))[0];
        if (!result) {
            result = new DbEntityPropertyLayout(property);
            this.properties.push(result);
        }
        return result;
    }
}
