import {
    Component, HostBinding, OnInit, Input, OnChanges, OnDestroy, ChangeDetectorRef, AfterViewInit, ElementRef,
    ViewChildren, QueryList, ViewContainerRef, HostListener, NgZone, Renderer2, ChangeDetectionStrategy
} from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk';
import { MdRow } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DiagramLayoutService } from '../../services/diagram-layout.service';
import { DbModel } from '../../models/db-model';
import { DbEntity } from '../../models/db-entity';
import { DbEntityProperty } from '../../models/db-entity-property';
import { DbEntityLayout } from '../../models/db-entity-layout';
import { TableSettings } from '../../models/table-settings';
import { ColumnSettings } from '../../models/column-settings';
import { EventDebouncer } from '../../core/event-debouncer';

@Component({
    selector: 'efd-db-entity-diagram-figure',
    templateUrl: './db-entity-diagram-figure.component.html',
    styleUrls: ['./db-entity-diagram-figure.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class DbEntityDiagramFigureComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private _removeListeners: Function[] = [];

    @Input()
    model: DbModel;

    @Input()
    entity: DbEntity;

    entityLayout: DbEntityLayout = null;

    @HostBinding('style.top.px')
    get top() { return this.entityLayout.y; }

    @HostBinding('style.left.px')
    get left() { return this.entityLayout.x; }

    @HostBinding('style.zIndex')
    get zIndex() { return this.entityLayout.zIndex; }

    @HostBinding('style.display')
    get display() { return this.entityLayout.visible ? 'inline-block' : 'none'; }

    @ViewChildren(MdRow, { read: ViewContainerRef })
    rows: QueryList<ViewContainerRef>;

    get modelLayout() { return this._diagramLayout.getModelLayout(this.model); }

    entityContext = new DbEntityContext();
    propertiesDataSource = new DbEntityPropertiesDataSource(this.entityContext);
    displayedColumns = ['key', 'name', 'clrType', 'nullable'];

    private _draggingPoint: { x: number, y: number } = null;


    constructor(
        private readonly _el: ElementRef,
        private readonly _changeDetector: ChangeDetectorRef,
        private readonly _diagramLayout: DiagramLayoutService,
        zone: NgZone,
        renderer: Renderer2
    ) {
        const debouncer = new EventDebouncer(zone, renderer);
        this._removeListeners.push(
            debouncer.listen(_el.nativeElement, 'mouseover', e => {
                this._diagramLayout.hoveredEntity = this.entityLayout;
            }),
            /* renderer.listen(_el.nativeElement, 'mousedown', (e: MouseEvent) => {
                const element = this._el.nativeElement as HTMLElement;
                const { top, left } = element.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;
                this._draggingPoint = { x, y };
            }),
            renderer.listen('document', 'mouseup', e => {
                this._draggingPoint = null;
            }),
            renderer.listen('document', 'mousemove', (e: MouseEvent) => {
                if (this._draggingPoint) {
                    this.entityLayout.x = e.clientX - this._draggingPoint.x;
                    this.entityLayout.y = e.clientY - this._draggingPoint.y;
                    e.stopPropagation();
                    e.preventDefault();
                }
            }) */
        );
    }

    ngOnInit() {
    }

    ngOnChanges(changes) {
        this.entityContext.entity = this.entity;
        this.entityLayout = this._diagramLayout.getEntityLayout(this.model, this.entity);
    }

    ngAfterViewInit() {
        // NOTE: force md-table to display initial data. Seems like a bug in library
        this._changeDetector.detectChanges();

        this.entityLayout.width = this._el.nativeElement.clientWidth;
        this.entityLayout.height = this._el.nativeElement.clientHeight;

        const entityElement = this._el.nativeElement as HTMLElement;
        const entityRect = entityElement.getBoundingClientRect();
        const rows = this.rows.toArray();
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const propElement = row.element.nativeElement as HTMLElement;
            const propRect = propElement.getBoundingClientRect();
            const propLayout = this.entityLayout.getPropertyLayout(this.entity.properties[i]);
            propLayout.x = propRect.left - entityRect.left;
            propLayout.y = propRect.top - entityRect.top;
            propLayout.width = propRect.width;
            propLayout.height = propRect.height;
        }
    }

    ngOnDestroy() {
        for (const fn of this._removeListeners) {
            fn();
        }
        this._removeListeners = [];
    }

    isKey(property: DbEntityProperty) {
        return this.entity.keys.some(e => e.properties.some(ee => ee.equals(property)));
    }

    isForeignKey(property: DbEntityProperty) {
        return this.entity.foreignKeys.some(e => e.properties.some(ee => ee.equals(property)));
    }

    toggleEntityCollapsed() {
        this._diagramLayout.toggleEntityCollapsed(this.model, this.entity);
    }

}

class DbEntityContext {
    dataChange: BehaviorSubject<DbEntityProperty[]> = new BehaviorSubject<DbEntityProperty[]>([]);

    set entity(value: DbEntity) {
        this._entity = value;
        if (this._entity instanceof DbEntity) {
            this.dataChange.next(this._entity.properties);
        }
    }
    private _entity: DbEntity = null;
}

export class DbEntityPropertiesDataSource extends DataSource<DbEntityProperty> {
    constructor(private readonly _entityContext: DbEntityContext) {
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<DbEntityProperty[]> {
        return this._entityContext.dataChange;
    }

    disconnect(collectionViewer: CollectionViewer): void {
        //  do nothing
    }

}
