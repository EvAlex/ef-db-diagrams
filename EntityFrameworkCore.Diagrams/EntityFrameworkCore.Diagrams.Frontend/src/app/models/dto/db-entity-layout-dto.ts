import { ClrType } from '../clr-type';

export class DbEntityLayoutDto {
    x: number;
    y: number;
    name: string;
    type: ClrType;
    collapsed: boolean;
    visible: boolean;

    static fromJSON(value: Object): DbEntityLayoutDto {
        return Object.assign(
            new DbEntityLayoutDto(),
            value,
            {
                type: ClrType.fromJSON(value['type'])
            }
        );
    }
}
