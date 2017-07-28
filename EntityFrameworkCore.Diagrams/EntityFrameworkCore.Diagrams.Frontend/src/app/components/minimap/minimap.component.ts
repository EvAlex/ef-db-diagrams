import { Component, OnInit, DoCheck, Input, ElementRef, ViewChild } from '@angular/core';

const BORDER_WIDTH = 1;
const SIZE = 0.2;

@Component({
    selector: 'efd-minimap',
    templateUrl: './minimap.component.html',
    styleUrls: ['./minimap.component.scss']
})
export class MinimapComponent implements OnInit, DoCheck {

    element: HTMLElement;
    targetElement: HTMLElement;

    @ViewChild('viewport')
    viewport: ElementRef;

    get viewportWidth() {
        return this.element.clientWidth * this.targetElement.clientWidth / this.targetElement.scrollWidth;
    }

    get viewportHeight() {
        return this.element.clientHeight * this.targetElement.clientHeight / this.targetElement.scrollHeight;
    }

    get viewportLeft() {
        return this.element.clientWidth * this.targetElement.scrollLeft / this.targetElement.scrollWidth - BORDER_WIDTH;
    }

    get viewportTop() {
        return this.element.clientHeight * this.targetElement.scrollTop / this.targetElement.scrollHeight - BORDER_WIDTH;
    }

    constructor(el: ElementRef) {
        this.element = el.nativeElement;
        this.targetElement = this.element.parentElement;
    }

    ngOnInit() {
    }

    ngDoCheck() {
        this.element.style.width = this.targetElement.clientWidth * SIZE + 'px';
        this.element.style.height = this.targetElement.clientHeight * SIZE + 'px';
        this.element.style.right = this.targetElement.offsetWidth - this.targetElement.clientWidth + 'px';
        this.element.style.bottom = this.targetElement.offsetHeight - this.targetElement.clientHeight + 'px';

        const viewportElement = this.viewport.nativeElement as HTMLElement;
        viewportElement.style.width = this.viewportWidth + 'px';
        viewportElement.style.height = this.viewportHeight + 'px';
        viewportElement.style.marginLeft = this.viewportLeft + 'px';
        viewportElement.style.marginTop = this.viewportTop + 'px';
    }

    onViewportDrag({ top, left }: { top: number, left: number }) {
        const rect = this.element.getBoundingClientRect();
        left = Math.min(Math.max(left - rect.left, 0), rect.width);
        top = Math.min(Math.max(top - rect.top, 0), rect.height);
        this.targetElement.scrollLeft = left / rect.width * this.targetElement.scrollWidth;
        this.targetElement.scrollTop = top / rect.height * this.targetElement.scrollHeight;
    }

}
