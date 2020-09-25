import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  onToggle: boolean = false;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  toggler() {
    this.onToggle = !this.onToggle;
  }

  onLogout() {
    location.reload();
    this.authService.logout();
  }
}
