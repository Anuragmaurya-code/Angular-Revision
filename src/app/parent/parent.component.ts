import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ParentComponent implements OnInit {
  count:number=0;
  notesOfParent:string="";
  constructor() { }
  @ViewChild(NotesComponent) notes!:NotesComponent;

  ngOnInit(): void {
  }
  increment(){
    this.count+=1;
  }
  decrement(){
    this.count-=1;
  }
  accessChild(){
    this.notesOfParent=this.notes.something;
  }

}
