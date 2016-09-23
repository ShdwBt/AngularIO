 import { Component } from '@angular/core';
import {bootstrap, Component, Directive, NgFor, View, ElementRef} from 'angular2/angular2';

@Component({
    selector: 'my-editor',
    templateUrl: 'src/views/editor.component.html'
    //directives: [ CKEditor ]
})

 
 class CKEditor {
    constructor(_elm: ElementRef) {
        CKEDITOR.replace(_elm.nativeElement);
    }
}
 
export class EditorComponent{
    ckeditorContent:string;
    
   constructor(){
        this.ckeditorContent = "<p>My HTML 2</p>";
//        CKEDITOR.replace('editor1');
    }
}