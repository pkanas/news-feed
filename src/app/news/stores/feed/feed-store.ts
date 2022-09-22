


import { action, computed, observable } from "mobx-angular";
import { NewsFeed, NewsFeedPaginationResponse } from "../../modals/feed/feed-mode";


class Store {

    @observable
    private _newsFeed: any;

    @observable
    loaded: boolean = false;

    @observable
    totalItems: number = 30;

    @observable
    country: string = 'us';

    @observable
    apiKeys: string = '2042052c54744308a6b2f550dfda5cae';

    @action
    setAuditMode(response: NewsFeedPaginationResponse) {
        this._newsFeed = response.articles;
        this.loaded = true;
    }

    @computed
    get allNewsItems(): any[] {
        return this._newsFeed;
    }

    @action
    unsetNewsFeed() {
        this.loaded = false;
        this._newsFeed = [];
    }

}

export const NewsFeedStore = new Store();