import { Injectable} from "@angular/core";

import {Recipe} from "./recipe.model";
import { Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {

  private recipes : Recipe[] = [
    new Recipe (
      'Tasty Burger',
      'classic burger with sauce and french fries',
      'https://www.sciencesetavenir.fr/assets/img/2014/02/05/cover-r4x3w1200-57df57ac91870-le-hamburger-un-bon-choix-pour-la-pause-dejeuner.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe (
      'Pasta bolognese',
      'tomato pasta with beef, onions and cheese',
      'https://img.cuisineaz.com/660x660/2013/12/20/i18920-pates-bolo.webp',
      [
        new Ingredient('Pasta', 200),
        new Ingredient('Bolognese', 1)
      ]
    )
  ] ;
  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }

}
