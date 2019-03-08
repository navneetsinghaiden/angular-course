import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[isVegCategory]'
})
export class MenuCategoryDirective {

  constructor(private elementRef : ElementRef, private rendered : Renderer2) {
   this.rendered.addClass(this.elementRef.nativeElement, 'veg-category');
   }


}
