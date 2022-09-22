import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../services/news-feed.service';
import { NewsFeedStore } from '../../stores/feed/feed-store';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit {

  NewsFeedStore = NewsFeedStore;
  titleFlag: boolean = false;
  descriptionFlag: boolean = false;
  tempIndex: any;
  constructor(
    private _newsService: NewsFeedService,
    private _cdr: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this._newsService.getItems().subscribe(res => {
      this.refresh();
    })
  }

  refresh() {
    this._cdr.detectChanges();
  }

  ngOnDestroy() {
    NewsFeedStore.unsetNewsFeed();
  }

}
