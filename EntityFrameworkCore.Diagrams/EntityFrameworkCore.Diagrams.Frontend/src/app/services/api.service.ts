import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Observable, map } from 'rxjs';

import { DbModel } from '../models/db-model';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    queryDbModel(): Observable<DbModel> {
        return environment.production
            ? this.http.get('/db-diagrams/model').pipe(map(r => DbModel.fromJSON(r)))
            : timer(4).pipe(map(() => DbModel.fromJSON(environment.dbModel)));
    }

}
