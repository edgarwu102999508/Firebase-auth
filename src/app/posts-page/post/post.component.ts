import { Component, Input, OnInit } from "@angular/core";
import { PostService } from "src/app/shared/services/post.service";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Post } from "./post.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  currentPost: Post = null;
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  onEdit() {}
  onDelete(post: Post) {
    if (confirm("Are you sure? ")) {
      this.postService
        .deletePost(post)
        .then(() => {
          alert("This post has been deleted.");
        })
        .catch((err) => console.log(err));
    }
  }
}
