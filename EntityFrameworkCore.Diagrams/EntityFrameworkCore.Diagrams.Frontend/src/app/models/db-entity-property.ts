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
        return Object.assign(new DbEntityProperty(), obj, {
            clrType: ClrType.fromJSON(obj['clrType'])
        });
    }

    equals(other: DbEntityProperty): boolean {
        return other instanceof DbEntityProperty && (
            this === other
            || this.name === other.name && this.clrType.equals(other.clrType)
        );
    }
}
