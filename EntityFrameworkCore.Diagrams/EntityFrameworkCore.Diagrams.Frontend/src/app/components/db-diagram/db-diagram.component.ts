import { Component, OnInit, Input, AfterViewInit, HostListener, Renderer2, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { DiagramLayoutService } from '../../services/diagram-layout.service';
import { DbModel } from '../../models/db-model';
import { DbEntity } from '../../models/db-entity';
import { DbEntityLayout } from '../../models/db-entity-layout';
import { DbEntityRelationLayout } from '../../models/db-entity-relation-layout';
import { EventDebouncer } from '../../core/event-debouncer';

@Component({
    selector: 'efd-db-diagram',
    templateUrl: './db-diagram.component.html',
    styleUrls: ['./db-diagram.component.scss']
})
export class DbDiagramComponent implements OnInit, AfterViewInit {
    private mouseOverListener: Function;

    @Input()
    model: DbModel;

    get hoveredRelation() { return this._diagramLayout.hoveredRelation; }

    get modelLayout() { return this._diagramLayout.getModelLayout(this.model); }

    constructor(private readonly _diagramLayout: DiagramLayoutService, renderer: Renderer2, zone: NgZone) {
        const debouncer = new EventDebouncer(zone, renderer);
        this.mouseOverListener = debouncer.listen('window', 'mouseover', e => {
            zone.run(() => {
                this._diagramLayout.hoveredRelation = null;
                this._diagramLayout.hoveredEntity = null;
            });
            e.stopPropagation();
        });
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        //  NOTE: need to delay it, because view is already rendered, and data-bound values are applied.
        Observable.timer(1)
            .subscribe(() => this._diagramLayout.arrangeLayout(this.model));
    }

    onEntityDrag(entity: DbEntity, { top, left }: { top: number, left: number }) {
        const entityLayout = this._diagramLayout.getEntityLayout(this.model, entity);
        entityLayout.x = left;
        entityLayout.y = top;
    }

    onMouseOverRelation(e: MouseEvent, relation: DbEntityRelationLayout) {
        this._diagramLayout.hoveredRelation = relation;
        e.stopPropagation();
    }

}
