import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup;
  error: boolean;
  errorMessage: string;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onLogin(loginForm) {
    this.isLoading = true;
    this.authService.login(loginForm.email, loginForm.password).then(
      (res) => {
        console.log(res);
        this.error = false;
      },
      (err) => {
        this.errorMessage = err.message;
        this.error = true;
        this.loginForm.reset();
      }
    );

    // setInterval(() => {}, 1000);
  }
}
