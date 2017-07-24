import { Component, OnInit, Input, AfterViewInit, HostListener, Renderer2, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { DiagramLayoutService } from '../../services/diagram-layout.service';
import { DbModel } from '../../models/db-model';
import { DbEntity } from '../../models/db-entity';
import { DbEntityLayout } from '../../models/db-entity-layout';
import { DbEntityRelationLayout } from '../../models/db-entity-relation-layout';
import { Line } from '../../models/line';
import { EventDebouncer } from '../../core/event-debouncer';
import { IScaleEvent, DEFAULT_SCALE } from '../../directives/scalable.directive';

@Component({
    selector: 'efd-db-diagram',
    templateUrl: './db-diagram.component.html',
    styleUrls: ['./db-diagram.component.scss']
})
export class DbDiagramComponent implements OnInit, AfterViewInit {
    private mouseOverListener: Function;

    @Input()
    model: DbModel;

    currentScale: IScaleEvent = { scale: DEFAULT_SCALE };

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

    onScale(e: IScaleEvent) {
        this.currentScale = e;
        console.log('scale:', e);
    }

    getEntityKey(index: number, entity: DbEntityLayout) {
        return entity.key;
    }

    onEntityDragStart(entity: DbEntity) {
        const entityLayout = this._diagramLayout.getEntityLayout(this.model, entity);
        this._diagramLayout.draggedEntity = entityLayout;
    }

    onEntityDragEnd(entity: DbEntity) {
        const entityLayout = this._diagramLayout.getEntityLayout(this.model, entity);
        this._diagramLayout.draggedEntity = null;
    }

    onEntityDrag(entity: DbEntity, { top, left }: { top: number, left: number }) {
        left = left / this.currentScale.scale - this.currentScale.clientRect.left / this.currentScale.scale;
        top = top / this.currentScale.scale - this.currentScale.clientRect.top / this.currentScale.scale;
        this._diagramLayout.moveEntity(this.model, entity, left, top);
    }

    onMouseOverRelation(e: MouseEvent, relation: DbEntityRelationLayout) {
        this._diagramLayout.hoveredRelation = relation;
        e.stopPropagation();
    }

    onRelationLineDrag(relation: DbEntityRelationLayout, line: Line, { top, left }: { top: number, left: number }) {
        left = left / this.currentScale.scale - this.currentScale.clientRect.left / this.currentScale.scale;
        top = top / this.currentScale.scale - this.currentScale.clientRect.top / this.currentScale.scale;
        // console.log('drag line:', left, top);
        relation.moveLine(line, left, top);
    }

    onRelationLineDragStart(relation: DbEntityRelationLayout, line: Line) {

    }

    onRelationLineDragEnd(relation: DbEntityRelationLayout, line: Line) {

    }

}
