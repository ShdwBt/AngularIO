import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';

import { AppComponent }             from './../component/app.component';
import { PlayerDetailComponent }    from './../../players/player/detail/player-detail.component';

import { DashboardComponent }       from './../../dashboard/dashboard.component';
import { PlayersComponent }         from './../../players/players.component';

import { PlayerService }            from './../../players/player/service/player.service';

import { routing }                  from './../routing/app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    
    declarations: [
        AppComponent,
        PlayerDetailComponent,
        DashboardComponent,
        PlayersComponent
    ],
    
    providers: [PlayerService],
    
    bootstrap: [ AppComponent ]
})

export class AppModule { }
