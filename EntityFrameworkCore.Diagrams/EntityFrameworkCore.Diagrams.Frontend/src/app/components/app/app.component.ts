import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { DbModel } from '../../models/db-model';

@Component({
    selector: 'efd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    model: DbModel = null;
    modelLoading = false;
    modelLoadError = null;

    constructor(private readonly _api: ApiService) {
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
}
