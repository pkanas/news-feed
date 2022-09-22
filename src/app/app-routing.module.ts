import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feed',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
    data: { core: { title: 'News Feed' } },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
