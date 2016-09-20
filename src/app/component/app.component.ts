import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/">Dashboard</a>
            <a routerLink="/players">Players</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['src/css/app.component.css'],

})

export class AppComponent{
        title = 'Tour of Players';
}