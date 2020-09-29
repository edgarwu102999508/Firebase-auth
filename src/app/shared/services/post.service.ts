import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { Post } from "src/app/posts-page/post/post.model";

@Injectable({
  providedIn: "root",
})
export class PostService {
  dbUrl: string = "https://ng-http-1007.firebaseio.com/posts.json";
  // dbUrl: string = "https://jsonplaceholder.typicode.com/posts";
  // dbUrl: string = "../../../assets/posts.json";

  postsRef: AngularFireList<Post>;

  constructor(private db: AngularFireDatabase) {
    this.postsRef = this.db.list("/posts");
  }

  fetchPost() {
    return this.postsRef;
  }

  createPost(post: Post) {
    return this.postsRef.push(post);
  }

  deletePost(post: Post): Promise<void> {
    return this.postsRef.remove(post.key);
  }
}
