import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { StartRecipeComponent } from './start-recipe/start-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    StartRecipeComponent,
    RecipeEditComponent,
  ],
  imports: [
    RecipeRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
})
export class RecipeModule { }
