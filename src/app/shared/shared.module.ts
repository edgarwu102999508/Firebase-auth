import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [NavbarComponent, LoadingSpinnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
