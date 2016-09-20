import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

import { Player }                   from './player/player';
import { PlayerService }            from './player/service/player.service';


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
    
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPlayer.id]);
    }

}

