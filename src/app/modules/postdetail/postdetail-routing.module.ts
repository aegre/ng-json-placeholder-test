import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostdetailComponent } from './postdetail.component';

const routes: Routes = [{
  path: ':id',
  component: PostdetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostdetailRoutingModule { }
