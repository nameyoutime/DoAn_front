import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user != null) {

    } else {
      this.fireAuth.authState.subscribe((user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.user = user;
          this.router.navigate(["/home"]);
        }
      });
    }

  }

  loginWithGg() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      return this.fireAuth.signInWithPopup(provider);


    }
    catch (err) {
      // alert(err);
    }

  }
  getCurrentUser() {

  }
  signOut() {
    try {
      this.fireAuth.signOut();
      localStorage.setItem('user', null);
      this.user = null;
      this.router.navigate(["/loginPage"]);
    } catch (err) {
      // alert("Sigout failed");

    }
  }

}
