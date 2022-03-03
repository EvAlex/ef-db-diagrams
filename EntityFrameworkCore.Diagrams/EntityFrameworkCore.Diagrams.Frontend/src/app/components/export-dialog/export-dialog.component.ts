import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { DbModel } from '../../models/db-model';
import { DiagramLayoutService } from '../../services/diagram-layout.service';

enum ExportType {
    Layout,
    ModelWithLayout
}

@Component({
    selector: 'efd-export-dialog',
    templateUrl: './export-dialog.component.html',
    styleUrls: ['./export-dialog.component.scss']
})
export class ExportDialogComponent implements OnInit {

    get exportTypeLayout() { return ExportType.Layout; }
    get exportTypeModelWithLayout() { return ExportType.ModelWithLayout; }

    get selectedExportType() { return this._selectedExportType; }
    set selectedExportType(value: ExportType) {
        this._selectedExportType = value;
        this.updateExportData();
    }
    private _selectedExportType = ExportType.Layout;

    exportData;
    exportFilename = 'data.json';

    constructor(
        private readonly _diagramLayout: DiagramLayoutService,
        private readonly _dialog: MatDialogRef<ExportDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public model: DbModel
    ) {
    }

    ngOnInit() {
        this.updateExportData();
    }

    updateExportData() {
        switch (this.selectedExportType) {
            case ExportType.Layout:
                this.exportData = this._diagramLayout.exportLayout(this.model);
                this.exportFilename = `db-diagram_layout_${this.getTimestamp()}.json`;
                break;
            case ExportType.ModelWithLayout:
                this.exportData = this._diagramLayout.exportModelWithLayout(this.model);
                this.exportFilename = `db-diagram_model-and-layout_${this.getTimestamp()}.json`;
                break;
            default:
                throw new Error('Export type not supported: ' + this.selectedExportType);
        }
    }

    close() {
        this._dialog.close();
    }

    private getTimestamp() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const hours = now.getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();
        const timestamp = `${year}-${month}-${date}_${hours}_${min}_${sec}`;
        return timestamp;
    }

}
