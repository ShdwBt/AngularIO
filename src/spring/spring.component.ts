import {Component, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';

import {InMemoryBackendService,
        SEED_DATA}         from 'angular2-in-memory-web-api';

import {SpringService} from './spring.service';
import {Springobject} from './springobject';



@Component({
    selector: 'my-spring',
    template: `
      <h1>{{title}}</h1>
      <h2>Spring + Angular 2</h2>
      <ul>
          <li *ngFor="let s of springobject">
              {{s.firstName}}  {{s.lastName}}
         </li>
      </ul>
    `,
        providers: [
            HttpModule, 
            SpringService//,
            //provide(XHRBackend, { useClass: InMemoryBackendService })
        ]
    })


export class SpringComponent implements OnInit{

    constructor(private _springService : SpringService){}

    errorMessage: string;
    springobject : Springobject[];
    public title = 'Spring Objects';

    getSpringobject(){

       /* this._springService.getSpringobject().then(s => this._springService = s)*/
        this._springService.getSpringobject().subscribe(
            //s => this.springobject = s,
            s => this.springobject = s, 
        
            error =>  this.errorMessage = <any>error);
    }

    ngOnInit(){
        this.getSpringobject();
    }

} // export -> create a module
