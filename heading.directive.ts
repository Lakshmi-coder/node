import { Directive,ElementRef, Renderer, HostListener, ɵɵpureFunction1 } from '@angular/core';

@Directive({
  selector: '[appHeading]'
})
export class HeadingDirective {

  constructor(private _element:ElementRef, private _render:Renderer) { 
    this. _element.nativeElement.style.color="ORANGE";
    this. _render.setElementStyle(this._element.nativeElement,'text-align','center');
    this. _render.setElementStyle(this._element.nativeElement,'text-decoration','underline');
  }
  
  
}
