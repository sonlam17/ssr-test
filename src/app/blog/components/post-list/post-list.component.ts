import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/blog.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList$: Observable<Post[]>;
  constructor(private  blogService: BlogService) { }

  ngOnInit(): void {
    this.postList$=this.blogService.getPostList();
  }

}
