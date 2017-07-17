import { DbEntity } from './db-entity';

export class DbEntityLayout {
    x: number = null;
    y: number = null;
    width: number = null;
    height: number = null;

    constructor(public readonly entity: DbEntity) {
    }
}
