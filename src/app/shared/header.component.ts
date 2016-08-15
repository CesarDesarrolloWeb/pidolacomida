import { Component } from '@angular/core';

import { AuthService } from "./auth.service";
import { RecipeService } from "../recipes/recipe.service";

@Component({
  moduleId: module.id,
  selector: 'rb-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

  constructor(private authService: AuthService, private recipeService: RecipeService) {}

  onStore() {
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  onFetch() {
    this.recipeService.fetchData();
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }

}
