import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  baseURL = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get<Post[]>(this.baseURL)
  }

  getPost(id: number) {
    const postUrl = `${this.baseURL}/${id}`
    return this.httpClient.get<Post>(postUrl)
  }
}
