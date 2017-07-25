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

    static fromJSON(value: Object): DbEntityRelationConnector {
        return Object.assign(
            new DbEntityRelationConnector(),
            value,
            {
                lines: value['lines'].map(e => Line.fromJSON(e)),
                externalPoint: Point.fromJSON(value['externalPoint']),
            }
        );
    }

    // directionOverride: Direction | null = null;
}

export enum Direction {
    LeftToRight,
    RightToLeft
}
