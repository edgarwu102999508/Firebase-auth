import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.user$ = auth.authState;
  }

  login(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password).then(
        (res) => {
          resolve(res);
          this.router.navigate([""]);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  signup(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email, password).then(
        (res) => {
          resolve(res);
          this.router.navigate(["login"]);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  logout() {
    return new Promise((resovle, reject) => {
      this.auth.signOut().then(
        () => {
          this.router.navigate(["login"]);
          resovle();
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  resetPassword(email: string) {
    this.auth.sendPasswordResetEmail(email);
  }
}
