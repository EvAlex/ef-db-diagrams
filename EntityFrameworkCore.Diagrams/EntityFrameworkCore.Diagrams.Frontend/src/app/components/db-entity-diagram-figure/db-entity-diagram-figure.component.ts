import { Component, OnInit, Input } from '@angular/core';

import { DbEntity } from '../../models/db-entity';

@Component({
    selector: 'efd-db-entity-diagram-figure',
    templateUrl: './db-entity-diagram-figure.component.html',
    styleUrls: ['./db-entity-diagram-figure.component.scss']
})
export class DbEntityDiagramFigureComponent implements OnInit {

    @Input()
    entity: DbEntity;

    constructor() { }

    ngOnInit() {
    }

}
