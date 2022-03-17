import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  readonly url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

  getPostList(){
    return this.http.get<Post[]>(this.url);
  }
  getPostByID(id: string | null){
    return this.http.get<Post>(this.url+id);
  }

}
