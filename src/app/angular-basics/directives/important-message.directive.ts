import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImportantMessage]'
})
export class ImportantMessageDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'orange';
  }

}
