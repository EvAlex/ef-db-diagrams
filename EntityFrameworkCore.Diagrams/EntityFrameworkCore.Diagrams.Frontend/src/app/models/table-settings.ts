import { ColumnSettings } from './column-settings';

export class TableSettings {

    static fromJSON(value: Object): TableSettings {
        return Object.assign(
            new TableSettings(),
            value,
            {
                columns: value['columns'].map(e => ColumnSettings.fromJSON(e))
            }
        );
    }

    constructor(
        public readonly columns: ColumnSettings[] = []
    ) {
    }

    getColumn(key: string) {
        const result = this.columns.filter(e => e.key === key)[0];
        if (!result) {
            throw new Error('Current TableSettings instance does not contain ColumnSettings for key ' + key);
        }
        return result;
    }

    get displayedColumnsKeys() {
        return this.columns.filter(e => e.visible).map(e => e.key);
    }

    canMoveColumnUp(column: ColumnSettings) {
        this.assertForeignColumn(column);
        const index = this.columns.indexOf(column);
        return index > 0;
    }

    moveColumnUp(column: ColumnSettings) {
        if (!this.canMoveColumnUp(column)) {
            throw new Error('Cannot move column up. It is already at the top.');
        }
        const index = this.columns.indexOf(column);
        this.columns.splice(index, 1);
        this.columns.splice(index - 1, 0, column);
    }

    canMoveColumnDown(column: ColumnSettings) {
        this.assertForeignColumn(column);
        const index = this.columns.indexOf(column);
        return index < this.columns.length - 1;
    }

    moveColumnDown(column: ColumnSettings) {
        if (!this.canMoveColumnDown(column)) {
            throw new Error('Cannot move column down. It is already at the bottom.');
        }
        const index = this.columns.indexOf(column);
        this.columns.splice(index, 1);
        this.columns.splice(index + 1, 0, column);
    }

    private assertForeignColumn(column: ColumnSettings) {
        if (this.columns.indexOf(column) === -1) {
            throw new Error('Specified column does not belong to current TableSettings instance');
        }
    }
}
