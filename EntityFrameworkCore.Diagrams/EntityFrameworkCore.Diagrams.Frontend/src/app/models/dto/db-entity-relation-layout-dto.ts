import { ClrType } from '../clr-type';
import { DbEntityRelationConnector } from '../db-entity-relation-connector';
import { Line } from '../line';

export class DbEntityRelationLayoutDto {
    principalEntityName: string;
    principalEntityType: ClrType;

    dependentEntityName: string;
    dependentEntityType: ClrType;

    principalConnector: DbEntityRelationConnector;
    dependentConnector: DbEntityRelationConnector;

    collapsedPrincipalConnector: DbEntityRelationConnector;
    collapsedDependentConnector: DbEntityRelationConnector;

    fullPath: Line[] = [];
    draggableLines: Line[] = [];
}
