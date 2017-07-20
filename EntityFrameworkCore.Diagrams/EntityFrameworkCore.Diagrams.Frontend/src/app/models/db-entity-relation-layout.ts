import { DbEntity } from './db-entity';
import { DbEntityForeignKey } from './db-entity-foreign-key';
import { DbEntityProperty } from './db-entity-property';
import { DbEntityRelationConnector } from '../models/db-entity-relation-connector';
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
        const connectionPoints = [
            this.principalConnector.externalPoint,
            new Point(this.principalConnector.externalPoint.x, this.dependentConnector.externalPoint.y),
            this.dependentConnector.externalPoint
        ];
        const connectionLines = connectionPoints
            .slice(1)
            .reduce((p, c, i) => [...p, new Line(connectionPoints[i], connectionPoints[i + 1])], []);
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
