import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]

  constructor(private jsonService: JsonplaceholderService) {
    this.posts = []
   }

  ngOnInit() {
    this.jsonService.getPosts().subscribe(
      data => this.posts = data
    )
  }

}
