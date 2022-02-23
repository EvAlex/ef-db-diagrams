import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { mergeMap, tap, timer } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { DiagramLayoutService } from '../../services/diagram-layout.service';
import { DbModel } from '../../models/db-model';
import { DbModelLayout } from '../../models/db-model-layout';
import { DbEntityLayout } from '../../models/db-entity-layout';
import { ExportDialogComponent } from '../export-dialog/export-dialog.component';

@Component({
    selector: 'efd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

    model: DbModel = null;
    modelLoading = false;
    modelLoadError = null;

    toolbarCollapsed = false;

    get modelLayout() { return this._diagramLayout.getModelLayout(this.model); }

    @Input()
    allowToolbarCollapse = true;

    @Output()
    diagramLoad = new EventEmitter<DbModelLayout>();

    responsiveBreakpoints = {
        saveBtn: 148,
        restoreBtn: 108
    };

    constructor(
        private readonly _api: ApiService,
        private readonly _diagramLayout: DiagramLayoutService,
        private readonly _dialog: MatDialog
    ) {
    }

    ngOnInit() {
        this.modelLoading = true;
        this._api.queryDbModel()
            .subscribe(e => this.onModel(e), e => this.onModelError(e));
    }

    ngOnChanges(changes) {
        if ('allowToolbarCollapse' in changes && !this.allowToolbarCollapse && this.toolbarCollapsed) {
            this.toolbarCollapsed = false;
        }
    }

    onModel(model: DbModel) {
        console.log('model', model);
        this.model = model;
        this.modelLoading = false;
        this.modelLoadError = null;
        this.diagramLoad.emit(this._diagramLayout.getModelLayout(model));
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
        this.diagramLoad.emit(this._diagramLayout.getModelLayout(this.model));
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
                const newModel = this._diagramLayout.importDiagram(this.model || new DbModel(), dataStr as string);
                this.updateModel(newModel);
            });
        }
    }

    private updateModel(newModel: DbModel) {
        if (newModel !== this.model) {
            timer(1)
                .pipe(tap(() => {
                    this.model = null;
                    this.modelLoading = true;
                }))
                .pipe(mergeMap(() => timer(1)))
                .pipe(tap(() => {
                    this.model = newModel;
                    this.modelLoading = false;
                    this.diagramLoad.emit(this._diagramLayout.getModelLayout(this.model));
                }))
                .subscribe();
        }
    }
}
