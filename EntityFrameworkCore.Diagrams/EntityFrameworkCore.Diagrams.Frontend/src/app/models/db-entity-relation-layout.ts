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
    path: Point[] = [];

    get fullPath(): Line[] {
        return [
            ...this.principalConnector.lines,
            ...this.path.slice(1).reduce((p, c, i) => [...p, new Line(this.path[i], this.path[i + 1])], []),
            ...this.dependentConnector.lines
        ];
    }

    zIndex = 0;

    constructor(
        public readonly dependentEntity: DbEntity,
        public readonly foreignKey: DbEntityForeignKey
    ) {
    }

    toString(): string {
        const dependentEntity = this.dependentEntity.shortName;
        const dependentProperties = this.dependentProperties.map(e => e.name).join(', ');
        const principalEntity = this.principalEntity.shortName;
        const principalProperties = this.dependentProperties.map(e => e.name).join(', ');
        return `${dependentEntity} (${dependentProperties}) → ${principalEntity} (${principalProperties})`;
    }
}
