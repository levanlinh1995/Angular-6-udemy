import { ShoppingService } from './../shopping-list/shopping.service';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply test 1',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('meat', 6),
        new Ingredient('buns', 2),
      ],
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply test 2',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('meat', 6),
        new Ingredient('buns', 2),
      ],
    ),
  ];

  constructor(private shoppingSv: ShoppingService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes.slice()[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingSv.addIngredients(ingredients);
  }
}
