import { ClrType } from './clr-type';
import { ValueGenerated } from './value-generated';

export class DbEntityProperty {
    name: string;
    clrType: ClrType;
    isConcurrencyToken: boolean;
    isNullable: boolean;
    isReadOnlyAfterSave: boolean;
    isReadOnlyBeforeSave: boolean;
    isShadowProperty: boolean;
    isStoreGeneratedAlways: boolean;
    requiresValueGenerator: boolean;
    valueGenerated: ValueGenerated;

    static fromJSON(obj: Object): DbEntityProperty {
        return Object.assign(new DbEntityProperty(), {
            clrType: ClrType.fromJSON(obj['clrType'])
        });
    }
}
