import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'path';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('On Focus');
  }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
