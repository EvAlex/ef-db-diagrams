import { DbEntity } from './db-entity';
import { DbEntityPropertyLayout } from './db-entity-property-layout';
import { DbEntityProperty } from './db-entity-property';
import { Point } from './point';
import { DbEntityLayoutDto } from './dto/db-entity-layout-dto';

export class DbEntityLayout {
    x: number = null;
    y: number = null;
    width: number = null;
    height: number = null;
    zIndex = 0;

    get center(): Point {
        return new Point(this.x + this.width / 2, this.y + this.height / 2);
    }

    readonly properties: DbEntityPropertyLayout[] = [];

    collapsed = false;

    /**
     * @param entity Decorated entity
     * @param key Identifier used in ngFor trackBy
     */
    constructor(public readonly entity: DbEntity, public readonly key: number) {
    }

    getPropertyLayout(property: DbEntityProperty): DbEntityPropertyLayout {
        let result = this.properties.filter(e => e.property.equals(property))[0];
        if (!result) {
            result = new DbEntityPropertyLayout(property);
            this.properties.push(result);
        }
        return result;
    }

    toDto(): DbEntityLayoutDto {
        const result = new DbEntityLayoutDto();
        result.name = this.entity.name;
        result.type = this.entity.clrType;
        result.x = this.x;
        result.y = this.y;
        return result;
    }
}
