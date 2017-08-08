import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { DbModel } from '../../../src/app/models/db-model';
import { DbDiagramDto } from '../../../src/app/models/dto/db-diagram-dto';

@Injectable()
export class FirebaseBackendService {

    constructor(
        private readonly _db: AngularFireDatabase,
        private readonly _auth: AngularFireAuth
    ) {
        /* this.addDiagram(
            'evalexhimself@gmail.com',
            '19895923',
            {

            }
        ); */
    }

    queryDbModel(): Observable<DbModel | null> {
        return this._db.list('/diagrams', {
            query: {
                limitToFirst: 1,
                orderByPriority: true
            }
        }).map(items => items.length > 0 ? DbDiagramDto.fromJSON(items[0].diagram).model : null);
    }

    addDiagram(email, password, diargam) {
        this._auth.auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                this._db.list('/diagrams').push({
                    diagram: diargam,
                    authorUid: user.uid,
                    timestamp: firebase.database.ServerValue.TIMESTAMP
                });
            });
    }
}
