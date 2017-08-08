import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../src/environments/environment';

@Component({
    selector: 'efd-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    fullscreen = false;

    commitSha = environment.versions.revision;
    commitLink = `${environment.versions.repository}commit/${environment.versions.revision}`;

    constructor() { }

    ngOnInit() {
    }

}
