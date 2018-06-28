import { ShoppingService } from './../shopping-list/shopping.service';
import { RecipeService } from './../recipes/recipe.service';
import { AuthGuard } from './../auth/auth-guard.service';
import { AuthService } from './../auth/auth.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [SharedModule, AppRoutingModule],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  providers: [AuthService, AuthGuard, RecipeService, ShoppingService],
})
export class CoreModule { }
