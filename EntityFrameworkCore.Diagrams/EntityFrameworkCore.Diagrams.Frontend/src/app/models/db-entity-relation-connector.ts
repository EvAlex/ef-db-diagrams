import { Line } from './line';
import { Point } from './point';

export class DbEntityRelationConnector {
    lines: Line[] = [];
    externalPoint: Point;

    get direction(): Direction {
        return this.lines.some(e => e.left.x < this.externalPoint.x)
            ? Direction.LeftToRight
            : Direction.RightToLeft;
    }

    // directionOverride: Direction | null = null;
}

export enum Direction {
    LeftToRight,
    RightToLeft
}
