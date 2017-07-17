import {
    Component, HostBinding, OnInit, Input, OnChanges, ChangeDetectorRef, AfterViewInit, ElementRef,
    ViewChildren, QueryList, ViewContainerRef
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

@Component({
    selector: 'efd-db-entity-diagram-figure',
    templateUrl: './db-entity-diagram-figure.component.html',
    styleUrls: ['./db-entity-diagram-figure.component.scss']
})
export class DbEntityDiagramFigureComponent implements OnInit, OnChanges, AfterViewInit {

    @Input()
    model: DbModel;

    @Input()
    entity: DbEntity;

    entityLayout: DbEntityLayout = null;

    @HostBinding('style.top.px')
    get top() { return this.entityLayout.y; }

    @HostBinding('style.left.px')
    get left() { return this.entityLayout.x; }

    @ViewChildren(MdRow, { read: ViewContainerRef })
    rows: QueryList<ViewContainerRef>;

    entityContext = new DbEntityContext();
    propertiesDataSource = new DbEntityPropertiesDataSource(this.entityContext);
    displayedColumns = ['name', 'clrType'];

    constructor(
        private readonly _el: ElementRef,
        private readonly _changeDetector: ChangeDetectorRef,
        private readonly _diagramLayout: DiagramLayoutService
    ) {
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
