import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'efd-scaling-toolbar',
    templateUrl: './scaling-toolbar.component.html',
    styleUrls: ['./scaling-toolbar.component.scss']
})
export class ScalingToolbarComponent implements OnInit {

    @Input()
    defaultScale = 1;

    @Input()
    minScale = 0.1;

    @Input()
    maxScale = 10;

    @Input()
    scale: number = null;

    @Output()
    scaleChange = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
        if (this.scale === null) {
            this.scale = this.defaultScale;
        }
    }

    zoomIn() {
        this.scale += this.getStep();
        this.scaleChange.emit(this.scale);
    }

    zoomOut() {
        this.scale -= this.getStep();
        this.scaleChange.emit(this.scale);
    }

    resetZoom() {
        this.scale = this.defaultScale;
        this.scaleChange.emit(this.scale);
    }

    private getStep(): number {
        return this.scale <= this.defaultScale
            ? (this.defaultScale - this.minScale) / 20
            : (this.maxScale - this.defaultScale) / 20;
    }

}
