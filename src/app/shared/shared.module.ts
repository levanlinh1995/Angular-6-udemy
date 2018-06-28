import { AppDropdownDirective } from './app-dropdown.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [],
  declarations: [
    AppDropdownDirective,
  ],
  exports: [
    CommonModule,
    AppDropdownDirective,
  ],
  providers: [],
})
export class SharedModule { }
