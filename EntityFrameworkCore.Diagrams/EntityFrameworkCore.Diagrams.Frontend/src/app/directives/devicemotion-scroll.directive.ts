import { Directive, OnInit, OnDestroy, ElementRef, NgZone } from '@angular/core';
import { fromEvent, Observable, Subscription, throttleTime } from 'rxjs';

const MAX_TILT_X = 30;
const MAX_TILT_Y = 30;
const TILT_SENSITIVITY = 0.1;
const THROTTLE_TIME = 100;

@Directive({
    selector: '[efdDevicemotionScroll]'
})
export class DevicemotionScrollDirective implements OnInit, OnDestroy {
    private _removeListeners: Function[] = [];

    private zeroTilt = { x: 0, y: 0 };
    private prevTilt = { x: -1000, y: -1000 };

    constructor(private readonly _el: ElementRef, private readonly _zone: NgZone) {
    }

    ngOnInit() {
        this._zone.runOutsideAngular(() => {
            this._removeListeners.push(this.subscribeDeviceEvents());
        });
    }

    ngOnDestroy() {
        for (const fn of this._removeListeners) {
            fn();
        }
        this._removeListeners = [];
    }

    private subscribeDeviceEvents(): Function {
        let subscription: Subscription = null;
        const result = () => {
            if (subscription) {
                subscription.unsubscribe();
            }
        };
        if ('DeviceOrientationEvent' in window) {
            const init = (e) => {
                window.removeEventListener('deviceorientation', init, true);
                this.zeroTilt = tiltToXy(e);
                this.scrollToTilt(this.zeroTilt);
                subscription =
                    fromEvent<DeviceOrientationEvent>(window, 'deviceorientation')
                        .pipe(throttleTime(THROTTLE_TIME))
                        .subscribe(ee => this.scrollWithDeviceTilt(ee));
            };
            window.addEventListener('deviceorientation', init, true);
        }
        return result;
    }

    private scrollWithDeviceTilt(event: DeviceOrientationEvent) {
        const tiltXy = tiltToXy(event);
        this.shiftInitialTilt(tiltXy);
        this.scrollToTilt(tiltXy);
    }

    private shiftInitialTilt(tiltXy: { x: number, y: number }) {
        const dx = tiltXy.x - this.zeroTilt.x;
        if (Math.abs(dx) > MAX_TILT_X) {
            this.zeroTilt.x += Math.sign(dx) * (Math.abs(dx) - MAX_TILT_X);
        }
        const dy = tiltXy.y - this.zeroTilt.y;
        if (Math.abs(dy) > MAX_TILT_Y) {
            this.zeroTilt.y += Math.sign(dy) * (Math.abs(dy) - MAX_TILT_Y);
        }
    }

    private scrollToTilt(tiltXy) {
        const scrollContainer = this._el.nativeElement as HTMLElement;

        if (Math.abs(tiltXy.x - this.prevTilt.x) > TILT_SENSITIVITY) {
            const dx = tiltXy.x - this.zeroTilt.x;
            const centerScrollLeft = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
            const dsx = dx / MAX_TILT_X * centerScrollLeft;
            // scrollContainer.scrollLeft = centerScrollLeft + dsx;
            animate(scrollContainer.scrollLeft, centerScrollLeft + dsx, THROTTLE_TIME, v => scrollContainer.scrollLeft = v);
        }

        if (Math.abs(tiltXy.y - this.prevTilt.y) > TILT_SENSITIVITY) {
            const dy = tiltXy.y - this.zeroTilt.y;
            const centerScrollTop = (scrollContainer.scrollHeight - scrollContainer.clientHeight) / 2;
            const dsy = dy / MAX_TILT_Y * centerScrollTop;
            // scrollContainer.scrollTop = centerScrollTop - dsy;
            animate(scrollContainer.scrollTop, centerScrollTop - dsy, THROTTLE_TIME, v => scrollContainer.scrollTop = v);
        }

        this.prevTilt = tiltXy;
    }

}

function tiltToXy(event) {
    const beta = event.beta + 180; //  shift to [0, 360]
    const gamma = event.gamma + 90; //  shift to [0, 180];
    const orientation = window.orientation || window.screen && window.screen['orientation'] && window.screen['orientation'].angle || 0;
    let x, y;
    switch (orientation) {
        case 180:
        case -180:
            // portrait-secondary
            x = gamma;
            y = -beta;
            break;
        case 90:
        case -270:
            // landscape-primary
            x = -beta;
            y = -gamma;
            break;
        case 270:
        case -90:
            // lanndscape-secondary
            x = beta;
            y = gamma;
            break;
        case 0:
        default:
            //  portrait-primary
            x = -gamma;
            y = beta;
            break;
    }
    return {
        x,
        y
    };
}

function animate(startValue: number, targetValue: number, time: number, setFn: (v: number) => any): void {
    const delta = targetValue - startValue;
    const start = Date.now();
    const intervalId = window.setInterval(() => {
        const span = Date.now() - start;
        if (span < time) {
            const cur = startValue + delta * gaussian(span / time * Math.abs(delta) * 2 - Math.abs(delta), Math.abs(delta));
            setFn(cur);
        } else {
            setFn(targetValue);
            window.clearInterval(intervalId);
        }
    }, 16);
}

function gaussian(delta: number, threshold: number): number {
    if (delta >= threshold) {
        return 1;
    }
    if (delta <= -threshold) {
        return 0;
    }
    return normalcdf(0, 0.375, delta / threshold);
}

/**
 * Adapted from http://stackoverflow.com/questions/5259421/cumulative-distribution-function-in-javascript
 */
function normalcdf(mean: number, sigma: number, to: number): number {
    const z = (to - mean) / Math.sqrt(2 * sigma * sigma),
        t = 1 / (1 + 0.3275911 * Math.abs(z)),
        a1 = 0.254829592,
        a2 = -0.284496736,
        a3 = 1.421413741,
        a4 = -1.453152027,
        a5 = 1.061405429,
        erf = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);
    let sign = 1;
    if (z < 0) {
        sign = -1;
    }
    return (1 / 2) * (1 + sign * erf);
}
