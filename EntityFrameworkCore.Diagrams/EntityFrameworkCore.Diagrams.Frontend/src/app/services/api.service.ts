import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DbModel } from '../models/db-model';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

    constructor(private readonly _http: HttpClientModule) {

    }

    queryDbModel(): Observable<DbModel> {
        return environment.production
            ? this._http.get('/db-diagrams/model').map(r => DbModel.fromJSON(r.json()))
            : Observable.timer(4).map(() => DbModel.fromJSON(environment.dbModel));
    }

}
