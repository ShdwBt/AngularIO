import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }     from 'angular2-in-memory-web-api';
import { InMemoryDataService }      from './../../in-memory/in-memory-data.service';

import { AppComponent }             from './../component/app.component';
import { PlayerDetailComponent }    from './../../players/player/detail/player-detail.component';

import { DashboardComponent }       from './../../dashboard/dashboard.component';
import { PlayersComponent }         from './../../players/players.component';
import { PlayerSearchComponent }         from './../../players/player/search/player-search.component';


import { PlayerService }            from './../../players/player/service/player.service';

import { routing }                  from './../routing/app.routing';

import './../../rxjs-extensions';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    
    declarations: [
        AppComponent,
        PlayerDetailComponent,
        DashboardComponent,
        PlayersComponent,
        PlayerSearchComponent
    ],
    
    providers: [PlayerService],
    
    bootstrap: [ AppComponent ]
})

export class AppModule { }
