import { Directive, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';

const MIN_HEIGHT = 200;
const MIN_WIDTH = 200;
const ALLOWED_MARGIN = 64;

export const DEFAULT_SCALE = 1;

const noop = () => {};

export interface IScaleEvent {
    scale: number;
    translateX?: number;
    translateY?: number;
    clientRect?: ClientRect;
}

@Directive({
    selector: '[efdScalable]'
})
export class ScalableDirective implements OnInit, AfterViewInit, OnDestroy {
    private _removeMouseWheelListener = noop;

    private _scale = DEFAULT_SCALE;
    private _translateX = 0;
    private _translateY = 0;

    @Input()
    set scale(value: number) {
        const element = this._el.nativeElement as HTMLElement;
        const elementRect = element.getBoundingClientRect();
        const parentElementRect = element.parentElement.getBoundingClientRect();
        if (value === DEFAULT_SCALE) {
            //  TODO this is bad, but provides stable way out for user.
            this._translateX = this._translateY = 0;
            this.zoom(value, elementRect.width / 2, elementRect.height / 2);
        } else {
            const mouseX = elementRect.left + parentElementRect.width / 2;
            const mouseY = elementRect.top + parentElementRect.height / 2;
            this.zoom(value, mouseX, mouseY);
        }
    }

    @Output()
    scaleChange = new EventEmitter<IScaleEvent>();

    constructor(
        private readonly _el: ElementRef,
        private readonly _renderer: Renderer2
    ) {
    }

    ngOnInit() {
        const element = this._el.nativeElement as HTMLElement;
        if (element) {
            this._removeMouseWheelListener = this._renderer.listen(
                element.parentElement,
                'mousewheel',
                e => this.onMouseWheel(e)
            );
        }
    }

    ngAfterViewInit() {
        const element = this._el.nativeElement as HTMLElement;
        this.scaleChange.emit({
            scale: this._scale,
            translateX: this._translateX,
            translateY: this._translateY,
            clientRect: element.getBoundingClientRect()
        });
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

        const mouseX = e.clientX - elementRect.left;
        const mouseY = e.clientY - elementRect.top;

        this.zoom(newScale, mouseX, mouseY);

        e.preventDefault();
        e.stopPropagation();
    }

    private zoom(newScale: number, mouseX: number, mouseY: number) {
        const element = this._el.nativeElement as HTMLElement;
        const elementRect = element.getBoundingClientRect();
        const oldScale = this._scale;
        if (newScale > oldScale || this.canZoomOut(newScale)) {
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

            this.scaleChange.emit({
                scale: newScale,
                translateX: newX,
                translateY: newY,
                clientRect: element.getBoundingClientRect()
            });
        }
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
