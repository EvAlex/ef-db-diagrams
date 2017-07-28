import { Directive, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef, Renderer2, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ScalableDirective } from './scalable.directive';
import { EventDebouncer } from '../core/event-debouncer';

@Directive({
    selector: '[efdDraggable]'
})
export class DraggableDirective implements OnInit, OnDestroy {

    @Input()
    efdDraggable: boolean | '' = true;

    @Input()
    dragCursor = 'move';

    @Input()
    dragChangeElementStyle = true;

    @Input()
    efdDraggableScaleInfo: ScalableDirective;

    @Input()
    efdDraggableScrollContainer: HTMLElement;

    @Output()
    efdDrag = new EventEmitter<{ top: number, left: number }>();

    @Output()
    efdDragStart = new EventEmitter<never>();

    @Output()
    efdDragEnd = new EventEmitter<never>();

    @Input()
    scrollContainer: HTMLElement;

    mousedrag: Observable<any>;

    removeEventsListeners: Function[] = [];

    constructor(public element: ElementRef, renderer: Renderer2, private zone: NgZone) {
        const mouseup = new EventEmitter<MouseEvent>();
        const mousedown = new EventEmitter<MouseEvent>();
        const mousemove = new EventEmitter<MouseEvent>();

        /* const debouncer = new EventDebouncer(zone, renderer);
        this.removeEventsListeners.push(
            debouncer.listen('document', 'mouseup', e => mouseup.emit(e)),
            debouncer.listen(element.nativeElement, 'mousedown', e => mousedown.emit(e)),
            debouncer.listen('document', 'mousemove', e => mousemove.emit(e)),
        ); */


        zone.runOutsideAngular(() => {
            this.removeEventsListeners.push(
                renderer.listen('document', 'mouseup', e => {
                    mouseup.emit(e);
                    this.efdDragEnd.emit();
                    e.stopPropagation();
                    e.preventDefault();
                }),
                renderer.listen(element.nativeElement, 'mousedown', e => {
                    mousedown.emit(e);
                    this.efdDragStart.emit();
                    e.stopPropagation();
                    e.preventDefault();
                }),
                renderer.listen('document', 'mousemove', e => {
                    mousemove.emit(e);
                    e.stopPropagation();
                    e.preventDefault();
                }),
            );
        });

        this.mousedrag = mousedown
            .map(e => {
                const { top, left } = this.element.nativeElement.getBoundingClientRect();
                return {
                    top: e.clientY - top,
                    left: e.clientX - left,
                };
            })
            .flatMap(offset =>
                mousemove.map(e => ({
                    top: e.clientY - offset.top + (this.scrollContainer ? this.scrollContainer.scrollTop : 0),
                    left: e.clientX - offset.left + (this.scrollContainer ? this.scrollContainer.scrollLeft : 0)
                }))
                .takeUntil(mouseup)
            );
    }

    ngOnInit() {
        if (this.efdDraggable === '') {
            this.efdDraggable = true;
        }

        if (this.efdDraggable) {
            this.element.nativeElement.style.cursor = this.dragCursor;

            const subscription = this.mousedrag
                // .debounceTime(40)
                .subscribe(({ top, left }) => {
                    if (this.efdDraggableScaleInfo) {
                        const { scale, clientRect } = this.efdDraggableScaleInfo;
                        left = left / scale - clientRect.left / scale;
                        top = top / scale - clientRect.top / scale;
                    }
                    if (this.efdDraggableScrollContainer) {
                        const { scrollLeft, scrollTop } = this.efdDraggableScrollContainer;
                        left -= scrollLeft;
                        top -= scrollTop;
                    }

                    if (this.dragChangeElementStyle) {
                        this.element.nativeElement.style.top = top + 'px';
                        this.element.nativeElement.style.left = left + 'px';
                    }
                    this.zone.run(() => {
                        this.efdDrag.emit({
                            top: top,
                            left: left
                        });
                    });
                });
            this.removeEventsListeners.push(() => subscription.unsubscribe());
        }
    }

    ngOnDestroy() {
        for (const fn of this.removeEventsListeners) {
            fn();
        }
        this.removeEventsListeners = [];
    }

}
