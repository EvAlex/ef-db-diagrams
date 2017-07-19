import { Component, OnInit, Input, AfterViewInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DiagramLayoutService } from '../../services/diagram-layout.service';
import { DbModel } from '../../models/db-model';
import { DbEntityRelationLayout } from '../../models/db-entity-relation-layout';

@Component({
    selector: 'efd-db-diagram',
    templateUrl: './db-diagram.component.html',
    styleUrls: ['./db-diagram.component.scss']
})
export class DbDiagramComponent implements OnInit, AfterViewInit {

    @Input()
    model: DbModel;

    get hoveredRelation() { return this._diagramLayout.hoveredRelation; }

    get modelLayout() { return this._diagramLayout.getModelLayout(this.model); }

    constructor(private readonly _diagramLayout: DiagramLayoutService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        //  NOTE: need to delay it, because view is already rendered, and data-bound values are applied.
        Observable.timer(1)
            .subscribe(() => this._diagramLayout.arrangeLayout(this.model));
    }

    @HostListener('window:mouseover', ['$event'])
    onMouseEnter(e: MouseEvent) {
        this._diagramLayout.hoveredRelation = null;
        this._diagramLayout.hoveredEntity = null;
        e.stopPropagation();
    }

    onMouseOverRelation(e: MouseEvent, relation: DbEntityRelationLayout) {
        this._diagramLayout.hoveredRelation = relation;
        e.stopPropagation();
    }

}
