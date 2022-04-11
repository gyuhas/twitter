export class UserMentions {
    author_id: string;
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
    id: string;
    text: string;
    aggregateCount: number;

    constructor(author_id: string,
            retweet_count: number,
            reply_count: number,
            like_count: number,
            quote_count: number,
        id: string,
        text: string,
        aggregateCount: number) {
            this.author_id = author_id;
            this.retweet_count = retweet_count;
            this.reply_count = reply_count;
            this.like_count = like_count;
            this.quote_count = quote_count;
            this.id = id;
            this.text = text;
            this.aggregateCount = aggregateCount;
        }
}
