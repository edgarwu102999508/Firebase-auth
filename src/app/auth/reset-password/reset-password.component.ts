import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  isLoading: boolean = false;
  isSubmitted: boolean = false;

  resetForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  get email() {
    return this.resetForm.get("email");
  }
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onReset(resetForm) {
    this.authService.resetPassword(resetForm.email);
    this.isSubmitted = true;
  }
}
