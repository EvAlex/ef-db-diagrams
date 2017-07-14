
export class ClrType {
    namespace: string;
    name: string;
    assembly: string;
    genericTypeArguments: ClrType[] = [];

    get isGeneric() { return !this.genericTypeArguments || this.genericTypeArguments.length === 0; }

    get prettyName(): string {
        let result = this.name;
        switch (result) {
            case 'Int32':
                result = 'int';
                break;
            case 'UInt32':
                result = 'uint';
                break;
            case 'Int16':
                result = 'short';
                break;
            case 'UInt16':
                result = 'ushort';
                break;
            case 'Int64':
                result = 'long';
                break;
            case 'UInt64':
                result = 'ulong';
                break;
            case 'Byte':
                result = 'byte';
                break;
            case 'SByte':
                result = 'sbyte';
                break;
            case 'Char':
                result = 'char';
                break;
            case 'Single':
                result = 'float';
                break;
            case 'Double':
                result = 'double';
                break;
            case 'Decimal':
                result = 'int';
                break;
            case 'String':
                result = 'string';
                break;
            case 'Boolean':
                result = 'bool';
                break;
        }
        return result;
    }

    get isPrettyNameKeyword(): boolean {
        return this.prettyName !== this.name;
    }

    static fromJSON(obj: Object) {
        return Object.assign(new ClrType(), obj, {
            genericTypeArguments: obj['genericTypeArguments'].map(e => ClrType.fromJSON(e))
        });
    }
}
