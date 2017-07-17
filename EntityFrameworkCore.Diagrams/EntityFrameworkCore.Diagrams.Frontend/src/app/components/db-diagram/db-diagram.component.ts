import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DiagramLayoutService } from '../../services/diagram-layout.service';
import { DbModel } from '../../models/db-model';

@Component({
    selector: 'efd-db-diagram',
    templateUrl: './db-diagram.component.html',
    styleUrls: ['./db-diagram.component.scss']
})
export class DbDiagramComponent implements OnInit, AfterViewInit {

    @Input()
    model: DbModel;

    constructor(private readonly _diagramLayout: DiagramLayoutService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        //  NOTE: need to delay it, because view is already rendered, and data-bound values are applied.
        Observable.timer(1)
            .subscribe(() => this._diagramLayout.arrangeLayout(this.model));
    }

}
