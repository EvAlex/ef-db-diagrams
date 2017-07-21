import { Renderer2, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class EventDebouncer {
    constructor(private _zone: NgZone, private _renderer: Renderer2) {
    }

    listen(
        target: 'window' | 'document' | 'body' | any,
        eventName: string,
        listener: (event: any) => boolean | void,
        debounceTime: number = 40
    ): () => void {
        return this._zone.runOutsideAngular(() => {
            const tempSubj = new Subject<Event>();
            const result = this._renderer.listen(target, eventName, (e: MouseEvent) => {
                tempSubj.next(e);
                e.preventDefault();
                e.stopPropagation();
            });
            tempSubj.debounceTime(debounceTime).subscribe(e => this._zone.run(() => listener(e)));
            return result;
        });
    }
}
