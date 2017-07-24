
export class Point {
    constructor(public x: number, public y: number) {
    }

    equals(other: Point): boolean {
        return !!other && this.x === other.x && this.y === other.y;
    }
}
