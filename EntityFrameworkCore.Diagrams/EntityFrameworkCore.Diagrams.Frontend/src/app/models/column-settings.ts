
export class ColumnSettings {

    static fromJSON(value: Object): ColumnSettings {
        return Object.assign(
            new ColumnSettings(null, null, null),
            value
        );
    }

    constructor(
        public readonly key: string,
        public name: string,
        public visible: boolean,
        public readonly alwaysVisible = false
    ) {
    }

    toggleVisibility() {
        if (this.alwaysVisible) {
            throw new Error('Cannot toggle visibility for column ' + this.key);
        }
        this.visible = !this.visible;
    }

    canToggleVisibility() {
        return !this.alwaysVisible;
    }
}
