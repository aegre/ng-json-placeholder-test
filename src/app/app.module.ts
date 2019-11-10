import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
