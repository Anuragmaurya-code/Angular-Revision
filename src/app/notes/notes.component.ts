import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { API_NEW_URL, API_URL } from '../app.module';

@Component({
  selector: 'app-notes',
 
  templateUrl: './notes.component.html',
  // template:`
  // <h1>template {{something}}</h1>`,
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit,OnChanges {
  count:number=0;
  something: string='';

  constructor(@Inject(API_URL) private url:string,@Inject(API_NEW_URL)private new_url:string) { 
    console.log("this is notes url",this.url)
    console.log("this is new notes url",this.new_url)
    
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
