import { Component, Input, OnInit }         from '@angular/core';
import { ActivatedRoute, Params }           from '@angular/router';

import { Player }                           from './../player';
import { PlayerService }                    from './../service/player.service';

@Component({
    selector: 'my-player-detail',
    templateUrl: 'src/views/player-detail.component.html'

})

export class PlayerDetailComponent implements OnInit {
    @Input()
    player: Player;
    
    constructor(
        private playerService: PlayerService,
        private route: ActivatedRoute
    ) {}
    
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.playerService.getPlayer(id).then(player => this.player = player);
        });
    }
    
    goBack(): void {
        window.history.back();
    }
    
}