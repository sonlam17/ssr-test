import { Routes } from "@angular/router";
import { BlogComponent } from "./blog.component";
import { PostListComponent } from "./components/post-list/post-list.component";

export const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
      component: PostListComponent,

      }
    ]
  }
];
