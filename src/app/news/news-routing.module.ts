import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './page/feed/feed.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    data: {
      core: { title: 'Feed' },
      breadcrumb: null
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
