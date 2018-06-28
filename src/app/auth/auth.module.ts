import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
  ],
  exports: [],
  declarations: [
    SignupComponent,
    SigninComponent,
  ],
  providers: [],
})
export class AuthModule { }
