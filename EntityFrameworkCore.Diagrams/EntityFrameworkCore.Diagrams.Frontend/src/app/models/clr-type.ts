
export class ClrType {
    namespace: string;
    name: string;
    assembly: string;
    genericTypeArguments: ClrType[] = [];

    get isGeneric() { return !this.genericTypeArguments || this.genericTypeArguments.length === 0; }

    static fromJSON(obj: Object) {
        return Object.assign(new ClrType(), {
            genericTypeArguments: obj['genericTypeArguments'].map(e => ClrType.fromJSON(e))
        });
    }
}
