import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PostService } from "../shared/services/post.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-posts-page",
  templateUrl: "./posts-page.component.html",
  styleUrls: ["./posts-page.component.scss"],
})
export class PostsPageComponent implements OnInit {
  // posts;

  posts: any;
  isOpened: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.onFetch();
  }

  onFetch(): void {
    this.postService
      .fetchPost()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        this.posts = data;
      });
  }

  onCreate() {
    this.isOpened = true;
  }

  onClose() {
    this.isOpened = false;
  }
}
