import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRemoveBold]'
})
export class RemoveBoldDirective {

  constructor(private elementRef: ElementRef) {
    // console.log(elementRef); ----LEARN HOW TO SAVE OBJECT IN TEXT FOR STUDY----
     this.elementRef.nativeElement.style.fontWeight = 'normal';
  }

}
