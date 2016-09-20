import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';


import { Player }                   from './../players/player/player';

import { PlayerService }            from './../players/player/service/player.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'src/views/dashboard.component.html',
    styleUrls: ['src/css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    players: Player[] = [];

    constructor(
        private router: Router,
        private playerService: PlayerService
    ) { }

    ngOnInit(): void {
        this.playerService.getPlayers().then(players => this.players = players.slice(7, 11));
    }

    gotoDetail(player: Player): void { 
        let link = ['/detail', player.id];
        this.router.navigate(link);
    }
}
