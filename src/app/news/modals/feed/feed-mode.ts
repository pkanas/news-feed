
export interface NewsFeed {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: number;
        name: string;
    }
    title: string;
    url: string;
    urlToImage: string;
}

export interface NewsFeedPaginationResponse {
    status?: string;
    totalResults?: number;
    articles?: NewsFeed[];
}