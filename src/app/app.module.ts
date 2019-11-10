import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { JsonplaceholderService } from './services/jsonplaceholder.service';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JsonplaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
