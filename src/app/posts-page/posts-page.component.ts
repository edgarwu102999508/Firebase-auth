import { Component, OnInit } from "@angular/core";
import { Post } from "./post.model";

@Component({
  selector: "app-posts-page",
  templateUrl: "./posts-page.component.html",
  styleUrls: ["./posts-page.component.scss"],
})
export class PostsPageComponent implements OnInit {
  posts: Post[];
  constructor() {}

  ngOnInit(): void {}

  onDelete() {}
  onCreate() {}
}
