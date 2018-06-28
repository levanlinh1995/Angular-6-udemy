import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class AppDropdownDirective {
  @HostBinding('class.show') isShowed = false;

  @HostListener('click') onClick() {
    this.isShowed = !this.isShowed;
  }

}
