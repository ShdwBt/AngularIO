import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import { Observable }       from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Player }           from './../player';

import {Springobject} from './../../../spring/springobject';

@Injectable()
export class PlayerService {
    
    private _playersUrl = 'http://localhost:8095/players';
    private _playerUrl = 'http:://localhost:8095/player{id}';
    
    //private playersUrl = './../in-memory/players'; // For CHROME 
    //private playersUrl = './../players'; // for IE
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http){}
    // we use Promise for async service to do some work and give it a callback function.
    getPlayers(): Promise<Player[]> {
        return this
            .http
            .get(this._playersUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    
    getPlayer(id: number): Promise<Player> {
        return this
            .getPlayers()
            .then(players => players.find(player => player.id === id));
    }
    
    create(name: string): Promise<Player> {
        return this.http
            .post(this._playersUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    
    update(player: Player): Promise<Player> {
        const url = `${this._playerUrl}/${player.id}`;
        return this.http
            .put(url, JSON.stringify(player), {headers: this.headers})
            .toPromise()
            .then(() => player)
            .catch(this.handleError);
    }
    
    delete(id: number): Promise<void> {
        let url = `${this._playersUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
    goBack(): void {
        window.history.back();
    }
}