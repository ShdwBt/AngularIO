import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { platformBrowserDynamic }   from '@angular/platform-browser-dynamic';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }     from 'angular2-in-memory-web-api';
import { InMemoryDataService }      from './../../in-memory/in-memory-data.service';

import { AppComponent }             from './../component/app.component';
import { PlayerDetailComponent }    from './../../players/player/detail/player-detail.component';

import { DashboardComponent }       from './../../dashboard/dashboard.component';
import { PlayersComponent }         from './../../players/players.component';
import { PlayerSearchComponent }    from './../../players/player/search/player-search.component';
import { EditorComponent }          from './../../editor/editor.component';

import { PlayerService }            from './../../players/player/service/player.service';

import { routing }                  from './../routing/app.routing';

import './../../rxjs-extensions';

import { CKEditorModule }           from 'ng2-ckeditor';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing,
        CKEditorModule
    ],
    
    declarations: [
        AppComponent,
        PlayerDetailComponent,
        DashboardComponent,
        PlayersComponent,
        PlayerSearchComponent,
        EditorComponent
    ],
    
    providers: [
        PlayerService
    ],
    
    bootstrap: [ AppComponent, EditorComponent ]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);