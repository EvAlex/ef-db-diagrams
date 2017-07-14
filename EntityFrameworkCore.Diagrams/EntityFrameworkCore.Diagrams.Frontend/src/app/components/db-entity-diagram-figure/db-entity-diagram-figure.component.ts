import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DbEntity } from '../../models/db-entity';
import { DbEntityProperty } from '../../models/db-entity-property';

@Component({
    selector: 'efd-db-entity-diagram-figure',
    templateUrl: './db-entity-diagram-figure.component.html',
    styleUrls: ['./db-entity-diagram-figure.component.scss']
})
export class DbEntityDiagramFigureComponent implements OnInit, OnChanges {

    @Input()
    entity: DbEntity;

    entityContext = new DbEntityContext();
    propertiesDataSource = new DbEntityPropertiesDataSource(this.entityContext);
    displayedColumns = ['name', 'clrType'];

    constructor(private readonly _changeDetector: ChangeDetectorRef) {
    }

    ngOnInit() {
        setTimeout(() => {
            this._changeDetector.detectChanges();
        });
    }

    ngOnChanges(changes) {
        this.entityContext.entity = this.entity;
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
