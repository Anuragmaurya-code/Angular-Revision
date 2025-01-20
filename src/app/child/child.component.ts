import { Component, OnChanges, OnInit, SimpleChanges,Input,Output ,EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() count:number=0;
  @Output() increment=new EventEmitter<number>();
  @Output() decrement=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  incrementButtonClicked(){
    this.increment.emit(this.count)
  }
  decrementButtonClicked(){
    this.decrement.emit(this.count)
  }

}
