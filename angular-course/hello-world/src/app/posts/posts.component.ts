import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.posts = response as any[];
      });
      // We DONT catch the error (error => { ... }) that way a
      // global error handler will deal with it
  }

  createPost(titleInput: HTMLInputElement) {
    const post = { title: titleInput.value };
    this.posts.splice(0, 0, post);
    
    titleInput.value = '';

    this.service.create(post)
      .subscribe((response) => {
        post['id'] = response.id;
      }, (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          // alert('this post has already been created');
        } else {
          throw(error);
        }
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('this post has already been deleted');
        } else {
          throw(error);
        }
      });
  }
}
