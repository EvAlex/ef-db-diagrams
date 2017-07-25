
export class Point {

    static fromJSON(value: Object): Point {
        return Object.assign(
            new Point(null, null),
            value
        );
    }

    constructor(public x: number, public y: number) {
    }

    equals(other: Point): boolean {
        return !!other && this.x === other.x && this.y === other.y;
    }
}
