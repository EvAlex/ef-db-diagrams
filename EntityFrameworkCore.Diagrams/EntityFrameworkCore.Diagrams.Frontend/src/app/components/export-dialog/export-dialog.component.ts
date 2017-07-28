import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

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

    /**
     * https://github.com/angular/material2/issues/6113
     */
    exportClick = new EventEmitter<never>();

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
        @Inject(MD_DIALOG_DATA) public model: DbModel
    ) {
    }

    ngOnInit() {
        this.updateExportData();
    }

    updateExportData() {
        switch (this.selectedExportType) {
            case ExportType.Layout:
                this.exportData = this._diagramLayout.exportLayout(this.model);
                this.exportFilename = `db-diagram-layout_${this.getTimestamp()}.json`;
                break;
            case ExportType.ModelWithLayout:
                throw new Error('Export type not supported: ' + this.selectedExportType);
            default:
                throw new Error('Export type not supported: ' + this.selectedExportType);
        }
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
