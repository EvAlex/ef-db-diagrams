import { DbEntity } from './db-entity';
import { DbEntityForeignKey } from './db-entity-foreign-key';
import { DbEntityProperty } from './db-entity-property';
import { Line } from './line';

export class DbEntityRelationLayout {
    get principalEntity(): DbEntity { return this.foreignKey.principalEntity; }
    get principalProperties(): DbEntityProperty[] { return this.foreignKey.principalKey.properties; }
    get dependentProperties(): DbEntityProperty[] { return this.foreignKey.properties; }

    path: Line[] = [];

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
