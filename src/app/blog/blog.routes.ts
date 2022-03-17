import { Routes } from "@angular/router";
import { BlogComponent } from "./blog.component";
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostComponent } from "./components/post/post.component";

export const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [

      {
        path: ':id',
      component: PostComponent,
      },
      {
        path: '',
      component: PostListComponent,
      },

    ]
  }
];
