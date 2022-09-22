import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewsFeedPaginationResponse } from '../modals/feed/feed-mode';
import { NewsFeedStore } from '../stores/feed/feed-store';
@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(
    private _http: HttpClient,
  ) { }

  getItems(): Observable<NewsFeedPaginationResponse> {
    let params = `?country=${NewsFeedStore.country}&apiKey=${NewsFeedStore.apiKeys}&pageSize=${NewsFeedStore.totalItems}`;
    return this._http.get<NewsFeedPaginationResponse>('https://newsapi.org/v2/top-headlines' + (params ? params : '')).pipe(
      map((res: NewsFeedPaginationResponse) => {
        NewsFeedStore.setAuditMode(res);
        return res;
      })
    );

  }
}
