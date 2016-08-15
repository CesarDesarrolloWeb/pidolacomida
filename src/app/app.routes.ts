import { RouterModule, Routes }   from '@angular/router';

import { RecipesComponent }       from "./recipes/recipes.component";
import { ShoppingListComponent }  from "./shopping-list/shopping-list.component";
import { RECIPE_ROUTES }          from "./recipes/recipes.routes";
import { SignupComponent }        from "./unprotected/signup.component";
import { SigninComponent }        from "./unprotected/signin.component";
import { AuthGuard }              from "./shared/auth.guard";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES, canActivate: [AuthGuard] },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] }
];

export const routes = RouterModule.forRoot(APP_ROUTES);
