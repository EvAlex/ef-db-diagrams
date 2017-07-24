import { DbEntity } from './db-entity';
import { DbEntityForeignKey } from './db-entity-foreign-key';
import { DbEntityProperty } from './db-entity-property';
import { DbEntityRelationConnector, Direction } from '../models/db-entity-relation-connector';
import { Line } from './line';
import { Point } from './point';

export class DbEntityRelationLayout {
    get principalEntity(): DbEntity { return this.foreignKey.principalEntity; }
    get principalProperties(): DbEntityProperty[] { return this.foreignKey.principalKey.properties; }
    get dependentProperties(): DbEntityProperty[] { return this.foreignKey.properties; }

    principalConnector = new DbEntityRelationConnector();
    dependentConnector = new DbEntityRelationConnector();

    fullPath: Line[] = [];
    private _draggableLines: Line[] = [];

    zIndex = 0;

    constructor(
        public readonly dependentEntity: DbEntity,
        public readonly foreignKey: DbEntityForeignKey
    ) {
    }

    connect() {
        let left: Point, right: Point;
        if (this.principalConnector.externalPoint.x < this.dependentConnector.externalPoint.x) {
            left = this.principalConnector.externalPoint;
            right = this.dependentConnector.externalPoint;
        } else {
            left = this.dependentConnector.externalPoint;
            right = this.principalConnector.externalPoint;
        }

        const connectionLines: Line[] = [];
        const draggableLines: Line[] = [];
        if (this.principalConnector.direction === this.dependentConnector.direction) {
            if (this.principalConnector.direction === Direction.LeftToRight) {
                connectionLines.push(
                    new Line(
                        new Point(left.x, left.y),
                        new Point(right.x, left.y)
                    ),
                    new Line(
                        new Point(right.x, left.y),
                        new Point(right.x, right.y)
                    )
                );
            } else {
                connectionLines.push(
                    new Line(
                        new Point(right.x, right.y),
                        new Point(left.x, right.y)
                    ),
                    new Line(
                        new Point(left.x, right.y),
                        new Point(left.x, left.y)
                    ),
                );
            }
            draggableLines.push(connectionLines[connectionLines.length - 1]);
        } else if (left.x !== right.x) {
            const centerX = left.x + (right.x - left.x) / 2;
            connectionLines.push(
                new Line(
                    new Point(left.x, left.y),
                    new Point(centerX, left.y)
                ),
                new Line(
                    new Point(centerX, left.y),
                    new Point(centerX, right.y)
                ),
                new Line(
                    new Point(centerX, right.y),
                    new Point(right.x, right.y)
                )
            );
            draggableLines.push(connectionLines[connectionLines.length - 2]);
        } else {
            connectionLines.push(
                new Line(
                    new Point(left.x, left.y),
                    new Point(right.x, right.y)
                )
            );
            draggableLines.push(connectionLines[connectionLines.length - 1]);
        }

        this.fullPath = [
            ...this.principalConnector.lines,
            ...connectionLines,
            ...this.dependentConnector.lines
        ];
        this._draggableLines = draggableLines;
    }

    isDraggable(line: Line): boolean {
        return this._draggableLines.indexOf(line) !== -1;
    }

    moveLine(line: Line, x: number, y: number) {
        if (!this.isDraggable(line)) {
            throw new Error('Cannot move line. It is not draggable.');
        }
        if (line.p1.x === line.p2.x) {
            this.moveLineHorizontally(line, x);
        } else if (line.p1.y === line.p2.y) {
            this.moveLineVertically(line, y);
        } else {
            throw new Error('Only horizontal and vertical line movement is supported.');
        }
    }

    private moveLineHorizontally(line: Line, x: number) {
        this.growOrAddConnectedLine(line, line.p1, x);
        this.growOrAddConnectedLine(line, line.p2, x);

        line.p1.x = line.p2.x = x;
    }

    private growOrAddConnectedLine(line: Line, pointOfLine: Point, newX: number) {
        const lineIndex = this.fullPath.indexOf(line);
        const otherLines = this.fullPath.filter(e => e !== line);

        const lineToPointConnector = [this.principalConnector, this.dependentConnector]
            .filter(e => e.externalPoint.equals(pointOfLine))[0];
        if (lineToPointConnector) {
            const before = this.fullPath.indexOf(lineToPointConnector.lines[0]) < lineIndex;
            const newP1 = new Point(lineToPointConnector.externalPoint.x, lineToPointConnector.externalPoint.y);
            const newP2 = new Point(newX, lineToPointConnector.externalPoint.y);
            const newLine = before ? new Line(newP1, newP2) : new Line(newP2, newP1);
            const newIndex = before ? lineIndex : lineIndex + 1;
            this.fullPath.splice(newIndex, 0, newLine);
        } else {
            const lineToPoint = otherLines.filter(e => e.p1.equals(pointOfLine) || e.p2.equals(pointOfLine))[0];
            const connectedPoint = lineToPoint.p1.equals(pointOfLine) ? lineToPoint.p1 : lineToPoint.p2;
            connectedPoint.x = newX;
        }
    }

    private moveLineVertically(line: Line, y: number) {
        throw new Error('Moving line vertically is not implemented yet');
    }

    toString(): string {
        const dependentEntity = this.dependentEntity.shortName;
        const dependentProperties = this.dependentProperties.map(e => e.name).join(', ');
        const principalEntity = this.principalEntity.shortName;
        const principalProperties = this.dependentProperties.map(e => e.name).join(', ');
        return `${dependentEntity} (${dependentProperties}) → ${principalEntity} (${principalProperties})`;
    }
}
