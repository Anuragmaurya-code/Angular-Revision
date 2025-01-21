// import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  // constructor() { }
  @HostBinding('style.backgroundColor') backgroundColor:string='yellow'
  @HostListener('mouseover') onMouseOver(){
    this.backgroundColor='lightblue';
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.backgroundColor='yellow'
  }

}
