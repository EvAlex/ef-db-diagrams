import { Directive, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';

const MIN_HEIGHT = 200;
const MIN_WIDTH = 200;
const ALLOWED_MARGIN = 64;

const noop = () => {};

@Directive({
    selector: '[efdScalable]'
})
export class ScalableDirective implements OnInit, OnDestroy {
    private _removeMouseWheelListener = noop;

    private _scale = 1;
    private _translateX = 0;
    private _translateY = 0;

    constructor(
        private readonly _el: ElementRef,
        private readonly _renderer: Renderer2
    ) {
    }

    ngOnInit() {
        this._removeMouseWheelListener = this._renderer.listen(this._el.nativeElement, 'mousewheel', e => this.onMouseWheel(e));
    }

    ngOnDestroy() {
        this._removeMouseWheelListener();
        this._removeMouseWheelListener = noop;
    }

    private onMouseWheel(e: WheelEvent) {
        const element = this._el.nativeElement as HTMLElement;
        const elementRect = element.getBoundingClientRect();

        const oldScale = this._scale;
        const newScale = oldScale * Math.exp(- Math.sign(e.deltaY) * 0.15);

        if (newScale > oldScale || this.canZoomOut(newScale)) {
            const mouseX = e.clientX - elementRect.left;
            const mouseY = e.clientY - elementRect.top;
            const dx = elementRect.width / 2 - mouseX;
            const dy = elementRect.height / 2 - mouseY;
            const oldX = this._translateX;
            const oldY = this._translateY;
            const newX = dx * (newScale / oldScale - 1) + oldX;
            const newY = dy * (newScale / oldScale - 1) + oldY;

            element.style.transform = `translate(${newX}px, ${newY}px) scale(${newScale})`;
            element.style.transformOrigin = `50% 50%`;

            this._scale = newScale;
            this._translateX = newX;
            this._translateY = newY;
        }

        e.preventDefault();
        e.stopPropagation();
    }

    private canZoomOut(targetScale: number): boolean {
        const element = this._el.nativeElement as HTMLElement;
        const width = element.scrollWidth * targetScale;
        const height = element.scrollHeight * targetScale;
        return (height > element.clientHeight - ALLOWED_MARGIN * 2 || width > element.clientWidth - ALLOWED_MARGIN * 2)
            && height > MIN_HEIGHT && width > MIN_WIDTH;
    }

}

function isCloseTo(a: number, b: number) {
    return Math.abs(a - b) < 1E-4;
}
