import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DbModel } from '../models/db-model';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

    constructor(private readonly _http: Http) {

    }

    queryDbModel(): Observable<DbModel> {
        return environment.production
            ? this._http.get('/db-diagrams/model').map(r => DbModel.fromJSON(r.json()))
            : Observable.timer(4).map(() => DbModel.fromJSON(environment.dbModel));
    }

}
