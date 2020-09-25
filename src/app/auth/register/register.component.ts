import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  isSubmitted: boolean = false;
  error: boolean;
  errorMessage: string;

  signupForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get username() {
    return this.signupForm.get("username");
  }

  get email() {
    return this.signupForm.get("email");
  }

  get password() {
    return this.signupForm.get("password");
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSignup(signupForm) {
    this.authService.signup(signupForm.email, signupForm.password).then(
      (res) => {
        console.log(res);
        this.error = false;
      },
      (err) => {
        this.errorMessage = err.message;
        this.error = true;
      }
    );
  }
}
