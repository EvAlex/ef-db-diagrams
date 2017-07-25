import { DbEntityLayoutDto } from './db-entity-layout-dto';
import { DbEntityRelationLayoutDto } from './db-entity-relation-layout-dto';

export class DbModelLayoutDto {
    entities: DbEntityLayoutDto[] = [];
    relations: DbEntityRelationLayoutDto[] = [];
}
