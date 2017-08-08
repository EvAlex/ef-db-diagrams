import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../services/api.service';
import { DiagramLayoutService } from '../../services/diagram-layout.service';
import { DbModel } from '../../models/db-model';
import { DbEntityLayout } from '../../models/db-entity-layout';
import { ExportDialogComponent } from '../export-dialog/export-dialog.component';

@Component({
    selector: 'efd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    model: DbModel = null;
    modelLoading = false;
    modelLoadError = null;

    toolbarCollapsed = false;

    get modelLayout() { return this._diagramLayout.getModelLayout(this.model); }

    constructor(
        private readonly _api: ApiService,
        private readonly _diagramLayout: DiagramLayoutService,
        private readonly _dialog: MdDialog
    ) {
    }

    ngOnInit() {
        this.modelLoading = true;
        this._api.queryDbModel()
            .subscribe(e => this.onModel(e), e => this.onModelError(e));
    }

    onModel(model: DbModel) {
        this.model = model;
        this.modelLoading = false;
        this.modelLoadError = null;
    }

    onModelError(err) {
        this.model = null;
        this.modelLoading = false;
        this.modelLoadError = err;
    }

    saveLayout() {
        this._diagramLayout.saveLayout(this.model);
    }

    restoreLayout() {
        this._diagramLayout.restoreLayout(this.model);
    }

    toggleAllEntitiesVisibility() {
        const targetEntities = this.modelLayout.visibleEntities.length > 0
            ? this.modelLayout.visibleEntities
            : this.modelLayout.entities;
        for (const entity of targetEntities) {
            this.modelLayout.toggleEntityVisibility(entity);
        }
    }

    toggleEntityVisibility(entity: DbEntityLayout) {
        this.modelLayout.toggleEntityVisibility(entity);
    }

    showExportDialog() {
        this._dialog.open(ExportDialogComponent, { data: this.model });
    }

    onImportFileUpload(e: Event) {
        const { files } = e.target as HTMLInputElement;
        if (files instanceof FileList && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.readAsText(file);
            reader.addEventListener('load', ee => {
                const dataStr = ee.target['result'];
                const newModel = this._diagramLayout.importDiagram(this.model || new DbModel(), dataStr);
                this.updateModel(newModel);
            });
        }
    }

    private updateModel(newModel: DbModel) {
        if (newModel !== this.model) {
            Observable.timer(1)
                .do(() => {
                    this.model = null;
                    this.modelLoading = true;
                })
                .mergeMap(() => Observable.timer(1))
                .do(() => {
                    this.model = newModel;
                    this.modelLoading = false;
                })
                .subscribe();
        }
    }
}
