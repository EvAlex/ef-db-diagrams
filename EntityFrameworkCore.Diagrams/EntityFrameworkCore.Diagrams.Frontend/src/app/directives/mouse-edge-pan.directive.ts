import { Directive, OnInit, OnDestroy, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const TRIGGER_TIME = 100;
const HOTZONE_WIDTH = 0.1;
const FEED_PAN_FREQ = 25;
const PAN_STEP = 20;

@Directive({
    selector: '[efdMouseEdgePan]'
})
export class MouseEdgePanDirective implements OnInit, OnDestroy {
    private readonly _pan = new Subject<{ dx: number, dy: number }>();

    @HostListener('mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        const element = this._el.nativeElement as Element;
        const rect = element.getBoundingClientRect();
        const zoneWidth = rect.width * HOTZONE_WIDTH;
        const zoneHeight = rect.height * HOTZONE_WIDTH;
        const inLeftZone = e.clientX <= rect.left + zoneWidth;
        const inRightZone = e.clientX >= rect.right - zoneWidth;
        const inTopZone = e.clientY <= rect.top + zoneHeight;
        const inBottomZone = e.clientY >= rect.bottom - zoneHeight;

        const pan = { dx: 0, dy: 0 };

        if (inLeftZone) {
            const multiplier = (zoneWidth - (e.clientX - rect.left)) / zoneWidth;
            pan.dx = -PAN_STEP * multiplier;
        } else if (inRightZone) {
            const multiplier = (zoneWidth - (rect.right - e.clientX)) / zoneWidth;
            pan.dx = PAN_STEP * multiplier;
        }

        if (inTopZone) {
            const multiplier = (zoneHeight - (e.clientY - rect.top)) / zoneHeight;
            pan.dy = -PAN_STEP * multiplier;
        } else if (inBottomZone) {
            const multiplier = (zoneHeight - (rect.bottom - e.clientY)) / zoneHeight;
            pan.dy = PAN_STEP * multiplier;
        }

        this._pan.next(pan);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this._pan.next({ dx: 0, dy: 0 });
    }

    constructor(private readonly _el: ElementRef) {
    }

    ngOnInit() {
        Observable.timer(0, FEED_PAN_FREQ)
            .combineLatest(
                //  NOTE: hovering over hotzone for TRIGGER_TIME causes panning to start. But cancel should be immediate.
                this._pan.debounce(e => e.dx === e.dy && e.dx === 0 ? Observable.timer(0) : Observable.timer(TRIGGER_TIME)),
                (a, b) => b
            )
            .filter(e => e.dx !== 0 || e.dy !== 0)
            .subscribe(e => {
                const element = this._el.nativeElement as Element;
                element.scrollLeft += e.dx;
                element.scrollTop += e.dy;
            });

    }

    ngOnDestroy() {
        this._pan.next({ dx: 0, dy: 0 });
    }

}
