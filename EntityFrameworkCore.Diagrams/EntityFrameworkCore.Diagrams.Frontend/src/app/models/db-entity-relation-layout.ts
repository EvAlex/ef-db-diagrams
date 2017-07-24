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
        } else {
            connectionLines.push(
                new Line(
                    new Point(left.x, left.y),
                    new Point(right.x, right.y)
                )
            );
        }

        this.fullPath = [
            ...this.principalConnector.lines,
            ...connectionLines,
            ...this.dependentConnector.lines
        ];
    }

    toString(): string {
        const dependentEntity = this.dependentEntity.shortName;
        const dependentProperties = this.dependentProperties.map(e => e.name).join(', ');
        const principalEntity = this.principalEntity.shortName;
        const principalProperties = this.dependentProperties.map(e => e.name).join(', ');
        return `${dependentEntity} (${dependentProperties}) → ${principalEntity} (${principalProperties})`;
    }
}
