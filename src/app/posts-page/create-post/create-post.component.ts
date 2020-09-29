import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { PostService } from "src/app/shared/services/post.service";
import { Post } from "../post/post.model";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) {}

  get title() {
    return this.postForm.get("title");
  }

  get body() {
    return this.postForm.get("body");
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: new FormControl("", [Validators.required]),
      body: new FormControl("", [Validators.required]),
    });
  }

  onSubmit(postForm: Post) {
    // ===== Create new data by using HttpClient =====
    // const newPost: Post = postForm;
    // this.postService.createPost(postForm).subscribe(
    //   (post) => {
    //     this.posts.unshift(post);
    //     console.log(post);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    this.postService.createPost(postForm);
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }
}
