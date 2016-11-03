import { Component, ElementRef , AfterViewInit } from '@angular/core';
//import './../../node_modules/ckeditor/ckeditor.js';
//import * as ckeditor from "ckeditor";

let ckeditor = require("node_modules/ckeditor/ckeditor.js"); // Ckeditor module

@Component({
    selector: 'my-editor',
    templateUrl: 'src/views/editor.component.html'
})

 
export class EditorComponent implements AfterViewInit{
    ckeditorContent:string;
    
    constructor(){
        this.ckeditorContent = "<p>Editor is Load</p>";

    }
////    ngOnInit(){
////       window['CKEDITOR']['replace']( 'editor1' );
////    }
    ngAfterViewInit()
    {

        ckeditor.basePath="/node_modules/ckeditor/";

    }
}