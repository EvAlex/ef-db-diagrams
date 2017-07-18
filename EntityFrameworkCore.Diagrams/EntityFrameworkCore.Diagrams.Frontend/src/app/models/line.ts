import { Point } from './point';

export class Line {
    width = 4;

    constructor(public p1: Point, public p2: Point) {
    }

    get center(): Point {
        return new Point(
            Math.min(this.p1.x, this.p2.x) + Math.abs(this.p2.x - this.p1.x) / 2,
            Math.min(this.p1.y, this.p2.y) + Math.abs(this.p2.y - this.p1.y) / 2
        );
    }

    get dx() { return Math.abs(this.p1.x - this.p2.x); }

    get dy() { return Math.abs(this.p1.y - this.p2.y); }

    get top(): Point {
        return this.p1.y < this.p2.y ? this.p1 : this.p2;
    }

    get right(): Point {
        return this.p1.x < this.p2.x ? this.p2 : this.p1;
    }

    get bottom(): Point {
        return this.p1.y < this.p2.y ? this.p2 : this.p1;
    }

    get left(): Point {
        return this.p1.x < this.p2.x ? this.p1 : this.p2;
    }

    get isHorizontal() { return this.p1.y === this.p2.y; }

    get isVertical() { return this.p1.x === this.p2.x; }
}
