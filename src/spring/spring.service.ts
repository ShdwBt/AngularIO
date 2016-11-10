import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Springobject} from './springobject';

import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class SpringService {

    constructor (private http: Http) {}

    private _springObjectUrl = 'http://localhost:8095/base';

    //validate
    getSpringobject() : Promise<Springobject[]> {
        return this.http.get(this._springObjectUrl)
            .toPromise()
            .then(res => <Springobject[]> res.json())
            .catch(this.handleError);
    }
    
//    getSpringobject() {
//        return this.http.get(this._springObjectUrl)
//            .map(res => <Springobject[]> res.json().data)
//            .catch(this.handleError);
//    }
    
//    getSpringobject(): Observable<Springobject[]> {
//        return this
//            .http
//            .get(this._springObjectUrl)
//            .map()
//            .then(response => response.json().data as Springobject[])
//            .do(data => console.log(data))
//            .catch(this.handleError);
//    }
    
//    getSpringobject(): Promise<Springobject[]> {
//        return this
//            .http
//            .get(this._springObjectUrl)
//            .toPromise()
//            .then(response => response.json().data as Springobject[])
//            .catch(this.handleError);
//    }
    
//    getSpringobject(): Promise<Player> {
//        return this.http
//            .get(this._springObjectUrl, JSON.stringify(res => <Springobject[]> res.json()))
//            .toPromise()
//            .then(res => res.json().data)
//            .catch(this.handleError);
//    }    
    
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}