import { ShoppingService } from './shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  private ingredients: Ingredient[];
  constructor(private shoppingSv: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingSv.getIngredients();
    this.shoppingSv.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );
  }

  onEditItem(index: number) {
    this.shoppingSv.startedEditIngredient.next(index);
  }
}
