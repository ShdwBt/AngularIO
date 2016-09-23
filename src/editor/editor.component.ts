 import { Component } from '@angular/core';


@Component({
    selector: 'editorComponent',
    template: 
        `
            <ckeditor [(ngModel)]="ckeditorContent" [config]="{uiColor: '#99000'}" (change)="onChange($event)" (ready)="onReady($event)" debounce="500">
            </ckeditor>
        `//,
    //directives: [ CKEditor ]
})

export class EditorComponent{
    ckeditorContent:string;
    
    constructor(){
        this.ckeditorContent = "<p>My HTML 2</p>";
    }
}