import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { mergeMap } from 'rxjs-compat/operator/mergeMap';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { Observable, observable } from 'rxjs';
import { Post } from '../../models/blog.interface';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$: Observable<Post>;
  constructor(
    private readonly blogService: BlogService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.post$=this.blogService.getPostByID(id)

  }

}
