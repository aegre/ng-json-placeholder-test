import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/posts/posts.module#PostsModule'
  },
  {
    path: 'post',
    loadChildren: './modules/postdetail/postdetail.module#PostdetailModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
