import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostdetailRoutingModule } from './postdetail-routing.module';
import { PostdetailComponent } from './postdetail.component';

@NgModule({
  declarations: [PostdetailComponent],
  imports: [
    CommonModule,
    PostdetailRoutingModule
  ]
})
export class PostdetailModule { }
