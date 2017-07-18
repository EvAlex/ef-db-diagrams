import { Component, OnInit, Input } from '@angular/core';

import { DbEntityRelationLayout } from '../../models/db-entity-relation-layout';

@Component({
    selector: 'efd-db-relation-connector',
    templateUrl: './db-relation-connector.component.html',
    styleUrls: ['./db-relation-connector.component.scss']
})
export class DbRelationConnectorComponent implements OnInit {

    @Input()
    relation: DbEntityRelationLayout;

    constructor() { }

    ngOnInit() {
    }

}
