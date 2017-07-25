import { DbEntityLayoutDto } from './db-entity-layout-dto';
import { DbEntityRelationLayoutDto } from './db-entity-relation-layout-dto';

export class DbModelLayoutDto {
    entities: DbEntityLayoutDto[] = [];
    relations: DbEntityRelationLayoutDto[] = [];

    static fromJSON(value: Object): DbModelLayoutDto {
        return Object.assign(
            new DbModelLayoutDto(),
            value,
            {
                entities: value['entities'].map(e => DbEntityLayoutDto.fromJSON(e)),
                relations: value['relations'].map(e => DbEntityRelationLayoutDto.fromJSON(e)),
            }
        );
    }
}
