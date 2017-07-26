import { DbEntityLayoutDto } from './db-entity-layout-dto';
import { DbEntityRelationLayoutDto } from './db-entity-relation-layout-dto';
import { TableSettings } from '../table-settings';

export class DbModelLayoutDto {
    entities: DbEntityLayoutDto[] = [];
    relations: DbEntityRelationLayoutDto[] = [];
    entitiesTableSettings: TableSettings;

    static fromJSON(value: Object): DbModelLayoutDto {
        return Object.assign(
            new DbModelLayoutDto(),
            value,
            {
                entities: value['entities'].map(e => DbEntityLayoutDto.fromJSON(e)),
                relations: value['relations'].map(e => DbEntityRelationLayoutDto.fromJSON(e)),
                entitiesTableSettings: value['entitiesTableSettings']
                    ? TableSettings.fromJSON(value['entitiesTableSettings'])
                    : value['entitiesTableSettings']
            }
        );
    }
}
