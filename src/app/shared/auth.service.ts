import { Injectable } from "@angular/core";

import { User } from "./user.interface";
import { Router } from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  signinUser(user: User) {
    let that = this;
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(function (data) {
        console.log(data);
        that.router.navigate(['/recipes']);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
