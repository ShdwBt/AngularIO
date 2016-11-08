import { ModuleWithProviders }          from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { PlayersComponent }             from './../../players/players.component';
import { DashboardComponent }           from './../../dashboard/dashboard.component';
import { PlayerDetailComponent }        from './../../players/player/detail/player-detail.component';
import { EditorComponent }             from './../../editor/editor.component';
import { SpringComponent }             from './../../spring/spring.component';

const appRoutes: Routes = [ 
    {
        path: '',
        component: DashboardComponent
    },

    {
        path: 'players',
        component: PlayersComponent
    },

    {
        path: 'detail/:id',
        component: PlayerDetailComponent
    },

    {
        path: 'editor',
        component: EditorComponent
    },

    {
        path: 'spring',
        component: SpringComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 