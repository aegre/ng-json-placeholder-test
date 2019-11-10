import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostlistComponent } from './components/postlist/postlist.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';

const routes: Routes = [
  {
    path: '',
    component: PostlistComponent
  },
  {
    path: ':id',
    component: PostdetailComponent
  },
  {
    path: 'search/:search',
    component: PostlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
