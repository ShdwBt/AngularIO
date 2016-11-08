import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Springobject} from './springobject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SpringService {

    constructor (private http: Http) {}

    private _playersUrl = 'http://localhost:8090/players_list';

    getSpringobject() {
        return this.http.get(this._playersUrl)
            .map(res => <Springobject[]> res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}