import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

import { Player }                   from './player/player';
import { PlayerService }            from './player/service/player.service';
import { Springobject } from './../spring/springobject';


/* The (*) prefix to ngFor indicates that the <li> element and its children constitute a master template.
The quoted text assigned to ngFor means “take each hero in the players array, store it in the local hero variable, and make it available to the corresponding template instance”.
The player of let player is the player in onSelect arg
 */

@Component({
    selector: 'my-players',
    templateUrl: 'src/views/players.component.html',
    styleUrls: ['src/css/players.component.css']

})

export class PlayersComponent implements OnInit {
    players: Player[];
    
    selectedPlayer: Player;
    
    // service injection
    //  Angular will know to supply an instance of the service when it creates a new AppComponent.
    constructor( 
        private router: Router,
        private playerService: PlayerService
    ){}

    //We pass our callback function as an argument to the Promise's then method
    getPlayers(): void {
        this.playerService.getPlayers().then(players => this.players = players);
    }
    
    ngOnInit(): void {
        this.getPlayers();
    }
    
    onSelect(player: Player): void {
        this.selectedPlayer = player;
    }
    
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.playerService.create(name)
            .then(player => {
                this.players.push(player);
                this.selectedPlayer = null;
            });
    }
    
    delete(player: Player): void {
        this.playerService
            .delete(player.id)
            .then(() => {
                this.players = this.players.filter(p => p !== player);
                if (this.selectedPlayer === player) { this.selectedPlayer = null; }
            });
    }
    
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPlayer.id]);
    }

}

