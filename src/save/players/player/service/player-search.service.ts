import { Injectable }           from '@angular/core';
import { Http, Response }       from '@angular/http';
import { Observable }           from 'rxjs';

import { Player }               from './../player';

@Injectable()
export class PlayerSearchService {
    constructor(private http: Http) {}
    search(term: string): Observable<Player[]> {
        return this
            .http
            .get(`src/players/?name=${term}`)
            .map((r: Response) => r.json().data as Player[]);
    }
}