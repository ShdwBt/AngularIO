import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

import { PlayerService }            from './../players/player/service/player.service';

import { Player }                   from './../players/player/player';

import { Springobject }                   from './../spring/springobject';
import { SpringService } from './../spring/spring.service';



@Component({
    selector: 'my-dashboard',
    templateUrl: 'src/views/dashboard.component.html',
    styleUrls: ['src/css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    //springobject: Springobject[] = [];
    players: Player[] = [];
    
    constructor(
        private router: Router,
        
        //private springService: SpringService
    
        private playerService: PlayerService
    ) { }

    ngOnInit(): void {
        
        //this.springService.getSpringobject().then(springobject => //this.springobject = springobject.slice(7, 11));
        
        this.playerService.getPlayers().then(players => this.players = players.slice(7, 11));
        
    }
//goToDetail(springobject : Springobject): void {
    gotoDetail(player: Player): void { 
        let link = ['/detail', player.lastName];
        this.router.navigate(link);
    }
}
