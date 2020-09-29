import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";

import { HomePageComponent } from "./home-page/home-page.component";
import { PostsPageComponent } from "./posts-page/posts-page.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { AuthService } from "./shared/services/auth.service";
import { PostComponent } from "./posts-page/post/post.component";
import { CreatePostComponent } from "./posts-page/create-post/create-post.component";
import { PostService } from "./shared/services/post.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostsPageComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    PostComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
  ],
  providers: [AuthService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
