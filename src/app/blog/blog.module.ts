import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './blog.routes';
import { AaaComponent } from './aaa/aaa.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostListComponent,
    AaaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
