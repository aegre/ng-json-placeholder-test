import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  /**
   * Variable to keep the reference of the observable returned by
   * the service
   */
  posts: any

  search = 'da'

  constructor(private jsonService: JsonplaceholderService) {}

  ngOnInit() {
    this.posts = this.jsonService.getPosts()
  }

  onSearch() {
    console.log(this.search)
  }

}
