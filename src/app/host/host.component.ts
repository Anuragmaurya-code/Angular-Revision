import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  host:{
    '(click)':'onClick()',
    '[class.isActive]':'isActive'

  }
})
export class HostComponent implements OnInit {
  isActive=false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isActive=!this.isActive;
    console.log('hostt worked')
  }

}
