import { Component, OnInit, Input, ElementRef } from '@angular/core';

const BORDER_WIDTH = 1;

@Component({
    selector: 'efd-minimap',
    templateUrl: './minimap.component.html',
    styleUrls: ['./minimap.component.scss']
})
export class MinimapComponent implements OnInit {

    @Input()
    targetElement: HTMLElement;

    get viewportWidth() {
        const element = this._el.nativeElement as HTMLElement;
        return element.clientWidth * this.targetElement.clientWidth / this.targetElement.scrollWidth;
    }

    get viewportHeight() {
        const element = this._el.nativeElement as HTMLElement;
        return element.clientHeight * this.targetElement.clientHeight / this.targetElement.scrollHeight;
    }

    get viewportLeft() {
        const element = this._el.nativeElement as HTMLElement;
        return element.clientWidth * this.targetElement.scrollLeft / this.targetElement.scrollWidth - BORDER_WIDTH;
    }

    get viewportTop() {
        const element = this._el.nativeElement as HTMLElement;
        return element.clientHeight * this.targetElement.scrollTop / this.targetElement.scrollHeight - BORDER_WIDTH;
    }

    constructor(private readonly _el: ElementRef) {
    }

    ngOnInit() {
    }

}
