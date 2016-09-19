import { Injectable }       from '@angular/core';

import { Player }           from './player';
import { PLAYERS }          from './mock-players';

@Injectable()
export class PlayerService {
    // we use Promise for async service to do some work and give it a callback function.
    getPlayers(): Promise<Player[]> {
        return Promise.resolve(PLAYERS);
    }
}