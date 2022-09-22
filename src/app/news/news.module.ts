import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './page/feed/feed.component';
import { NewsRoutingModule } from './news-routing.module';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
