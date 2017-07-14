import { Component, OnInit, Input } from '@angular/core';

import { DbModel } from '../../models/db-model';

@Component({
    selector: 'efd-db-diagram',
    templateUrl: './db-diagram.component.html',
    styleUrls: ['./db-diagram.component.scss']
})
export class DbDiagramComponent implements OnInit {

    @Input()
    model: DbModel;

    constructor() { }

    ngOnInit() {
    }

}
