import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'efd-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    fullscreen = false;

    constructor() { }

    ngOnInit() {
    }

}
