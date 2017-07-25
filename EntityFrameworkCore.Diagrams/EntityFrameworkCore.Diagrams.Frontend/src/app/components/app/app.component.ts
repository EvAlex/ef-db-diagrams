import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { DiagramLayoutService } from '../../services/diagram-layout.service';
import { DbModel } from '../../models/db-model';
import { DbEntityLayout } from '../../models/db-entity-layout';

@Component({
    selector: 'efd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    model: DbModel = null;
    modelLoading = false;
    modelLoadError = null;

    get modelLayout() { return this._diagramLayout.getModelLayout(this.model); }

    constructor(
        private readonly _api: ApiService,
        private readonly _diagramLayout: DiagramLayoutService
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
}
