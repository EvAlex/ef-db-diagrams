import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { DbModel } from '../../../src/app/models/db-model';
import { DbDiagramDto } from '../../../src/app/models/dto/db-diagram-dto';

@Injectable()
export class FirebaseBackendService {

    constructor(private readonly _db: AngularFireDatabase) {
    }

    queryDbModel(): Observable<DbModel | null> {
        return this._db.list('/diagrams', {
            query: {
                limitToFirst: 1,
                orderByPriority: true
            }
        }).map(items => items.length > 0 ? DbDiagramDto.fromJSON(items[0]).model : null);
    }
}
