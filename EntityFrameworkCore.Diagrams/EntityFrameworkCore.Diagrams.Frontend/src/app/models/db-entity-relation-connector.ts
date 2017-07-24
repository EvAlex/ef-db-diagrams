import { Line } from './line';
import { Point } from './point';

export class DbEntityRelationConnector {
    lines: Line[] = [];
    externalPoint: Point;
    // directionOverride: Direction | null = null;
}

export enum Direction {
    LeftToRight,
    RightToLeft
}
