import { DbEntityProperty } from './db-entity-property';

export class DbEntityPropertyLayout {
    x: number = null;
    y: number = null;
    width: number = null;
    height: number = null;

    constructor(public readonly property: DbEntityProperty) {
    }
}
