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

    static fromJSON(value: Object): DbEntityRelationLayoutDto {
        return Object.assign(
            new DbEntityRelationLayoutDto(),
            value,
            {
                principalEntityType: ClrType.fromJSON(value['principalEntityType']),
                dependentEntityType: ClrType.fromJSON(value['dependentEntityType']),
                principalConnector: DbEntityRelationConnector.fromJSON(value['principalConnector']),
                dependentConnector: DbEntityRelationConnector.fromJSON(value['dependentConnector']),
                collapsedPrincipalConnector: value['collapsedPrincipalConnector']
                    ? DbEntityRelationConnector.fromJSON(value['collapsedPrincipalConnector'])
                    : value['collapsedPrincipalConnector'],
                collapsedDependentConnector: value['collapsedDependentConnector']
                    ? DbEntityRelationConnector.fromJSON(value['collapsedDependentConnector'])
                    : value['collapsedDependentConnector'],
                fullPath: value['fullPath'].map(e => Line.fromJSON(e)),
                draggableLines: value['draggableLines'].map(e => Line.fromJSON(e)),
            }
        );
    }
}
