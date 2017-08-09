import { Component, OnInit, DoCheck, Input, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const BORDER_WIDTH = 1;
const SIZE = 0.2;

interface IMinimapSize {
    extent: {
        right: number,
        bottom: number,
        width: number,
        height: number
    };
    viewport: {
        top: number,
        left: number,
        width: number,
        height: number
    };
}

@Component({
    selector: 'efd-minimap',
    templateUrl: './minimap.component.html',
    styleUrls: ['./minimap.component.scss']
})
export class MinimapComponent implements OnInit, DoCheck {
    private prevSize: IMinimapSize = {
        extent: {
            right: 0,
            bottom: 0,
            width: 0,
            height: 0
        },
        viewport: {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };

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
        if (this.targetElement) {
            const newSize = this.getMinimapSize();
            if (!areEqual(newSize, this.prevSize)) {
                this.updateMinimap(newSize);
            }
        }
    }

    private updateMinimap(size: IMinimapSize) {
        this.element.style.width = size.extent.width + 'px';
        this.element.style.height = size.extent.height + 'px';
        this.element.style.right = size.extent.right + 'px';
        this.element.style.bottom = size.extent.bottom + 'px';

        const viewportElement = this.viewport.nativeElement as HTMLElement;
        viewportElement.style.width = size.viewport.width + 'px';
        viewportElement.style.height = size.viewport.height + 'px';
        viewportElement.style.marginLeft = size.viewport.left + 'px';
        viewportElement.style.marginTop = size.viewport.top + 'px';
    }

    private getMinimapSize(): IMinimapSize {
        return {
            extent: {
                right: this.targetElement.offsetWidth - this.targetElement.clientWidth,
                bottom: this.targetElement.offsetHeight - this.targetElement.clientHeight,
                width: this.targetElement.clientWidth * SIZE,
                height: this.targetElement.clientHeight * SIZE
            },
            viewport: {
                top: this.viewportTop,
                left: this.viewportLeft,
                width: this.viewportWidth,
                height: this.viewportHeight
            }
        };
    }

    onViewportDrag({ top, left }: { top: number, left: number }) {
        const rect = this.element.getBoundingClientRect();
        left = Math.min(Math.max(left - rect.left, 0), rect.width);
        top = Math.min(Math.max(top - rect.top, 0), rect.height);
        this.targetElement.scrollLeft = left / rect.width * this.targetElement.scrollWidth;
        this.targetElement.scrollTop = top / rect.height * this.targetElement.scrollHeight;
    }

}

function areEqual(a: IMinimapSize, b: IMinimapSize): boolean {
    return a.viewport.height === b.viewport.height
        && a.viewport.width === b.viewport.width
        && a.viewport.left === b.viewport.left
        && a.viewport.top === b.viewport.top
        && a.extent.height === b.extent.height
        && a.extent.width === b.extent.width
        && a.extent.right === b.extent.right
        && a.extent.bottom === b.extent.bottom;
}
