import { DbModelLayoutDto } from './db-model-layout-dto';
import { DbModel } from '../db-model';

export class DbDiagramDto {

    static fromJSON(value: Object): DbDiagramDto {
        return Object.assign(
            new DbDiagramDto(),
            value,
            {
                model: value['model'] ? DbModel.fromJSON(value['model']) : null,
                layout: value['layout'] ? DbModelLayoutDto.fromJSON(value['layout']) : null,
            }
        );
    }

    constructor(public model: DbModel = null, public layout: DbModelLayoutDto = null) {
    }
}
