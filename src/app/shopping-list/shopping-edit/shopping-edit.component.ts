import { ShoppingService } from './../shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  editMode = false;
  editedItemIdex: number;
  editedItem: Ingredient;
  subcription = new Subscription;
  constructor(private shoppingSv: ShoppingService) { }

  ngOnInit() {
    this.subcription = this.shoppingSv.startedEditIngredient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIdex = index;
        this.editedItem = this.shoppingSv.getIngredient(index);
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  onSubmit() {
    const name = this.form.value.name;
    const amount = this.form.value.amount;
    if (name && amount) {
      if (!this.editMode) {
        this.shoppingSv.addIngredient(new Ingredient(name, amount));
      } else {
        this.shoppingSv.updateIngredient(this.editedItemIdex, new Ingredient(name, amount));
      }

      this.editMode = false;
      this.form.reset();
    }
  }

  onClear() {
    this.editMode = false;
    this.form.reset();
  }

  onDelete() {
    this.shoppingSv.deleteIngredient(this.editedItemIdex);
    this.onClear();
  }
}
