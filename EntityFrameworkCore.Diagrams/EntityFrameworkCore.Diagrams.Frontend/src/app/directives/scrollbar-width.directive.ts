import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[efdScrollbarWidth]',
    exportAs: 'efdScrollbarWidth'
})
export class ScrollbarWidthDirective {

    get horizontalScrollbarWidth() {
        const element = this._el.nativeElement as HTMLElement;
        return element.offsetWidth - element.clientWidth;
    }

    get verticalScrollbarWidth() {
        const element = this._el.nativeElement as HTMLElement;
        return element.offsetHeight - element.clientHeight;
    }

    constructor(private readonly _el: ElementRef) {
    }

}
