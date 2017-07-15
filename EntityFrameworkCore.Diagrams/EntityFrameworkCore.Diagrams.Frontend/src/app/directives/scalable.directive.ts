import { Directive, OnInit, OnDestroy, ElementRef, ChangeDetectorRef, Renderer2 } from '@angular/core';

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
    private _originX: number = null;
    private _originY: number = null;

    constructor(
        private readonly _el: ElementRef,
        private readonly _renderer: Renderer2,
        changeDetector: ChangeDetectorRef
    ) {
        // changeDetector.detach();
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

        if (this._originX === null) {
            this._originX = elementRect.width / 2;
        }
        if (this._originY === null) {
            this._originY = elementRect.height / 2;
        }

        const oldScale = this._scale;
        const newScale = oldScale - Math.sign(e.deltaY) * 0.1 * 10;

        const mouseX = e.clientX - elementRect.left;
        const mouseY = e.clientY - elementRect.top;
        const oldOriginX = this._originX;
        const oldOriginY = this._originY;
        const newOriginX = mouseX / oldScale - (oldOriginX * oldScale - (oldOriginX - mouseX / oldScale) - mouseX);
        const newOriginY = mouseY / oldScale - (oldOriginY * oldScale - (oldOriginY - mouseY / oldScale) - mouseY);
        /*
        let newOriginX = mouseX / oldScale;
        let newOriginY = mouseY / oldScale;
        */

        element.style.transform = `scale(${newScale})`;
        element.style.transformOrigin = `${newOriginX}px ${newOriginY}px`;

        this._scale = newScale;
        this._originX = newOriginX;
        this._originY = newOriginY;

        console.log([mouseX, mouseY, newOriginX, newOriginY, newScale].map(ee => ee.toFixed(2)));

        /*
            const scale = this._scale - Math.sign(e.deltaY) * 0.1;
            if (scale > this._scale || this.canZoomOut(scale)) {
                // console.log(e.clientX);
                if (this._x !== null && e.clientX !== this._x) {
                    const dw = element.clientWidth * (scale - this._scale);
                    const dx = (this._x - e.clientX) / this._scale;

                    this._x -= (this._x - e.clientX) / this._scale;
                } else {
                    this._x = e.clientX;
                }
                if (this._y !== null && e.clientY !== this._y) {
                    this._y -= (this._y - e.clientY) / this._scale;
                } else {
                    this._y = e.clientY;
                }
                console.log(this._x);
                this._scale = scale;
                const x = (this._x / element.clientWidth) * 100;
                const y = (this._y / element.clientHeight) * 100;
                element.style.transform = `scale(${this._scale})`;
                element.style.transformOrigin = `${x}% ${y}%`;

                this._x = e.clientX;
                this._y = e.clientY;
            }
        */

        e.preventDefault();
        e.stopPropagation();
    }

    private canZoomOut(targetScale: number): boolean {
        const element = this._el.nativeElement as HTMLElement;
        const width = targetScale * element.clientWidth;
        const height = targetScale * element.clientHeight;
        return (height > element.clientHeight - ALLOWED_MARGIN || width > element.clientWidth - ALLOWED_MARGIN)
            && height > MIN_HEIGHT && width > MIN_WIDTH;
    }

}

function isCloseTo(a: number, b: number) {
    return Math.abs(a - b) < 1E-4;
}
