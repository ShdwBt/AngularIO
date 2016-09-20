import { Injectable }       from '@angular/core';

import { Player }           from './../player';
import { PLAYERS }          from './../../mock/mock-players';

@Injectable()
export class PlayerService {
    // we use Promise for async service to do some work and give it a callback function.
    getPlayers(): Promise<Player[]> {
        return Promise.resolve(PLAYERS);
    }
    
    getPlayer(id: number): Promise<Player> {
        return this.getPlayers().then(players => players.find(player => player.id === id));
    }
    
    goBack(): void {
        window.history.back();
    }
}