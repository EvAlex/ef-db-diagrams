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
}
