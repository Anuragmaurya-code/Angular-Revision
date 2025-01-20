import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

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

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
