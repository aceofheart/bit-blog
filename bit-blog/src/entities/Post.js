export class Post {
    constructor(post) {
        this.authorId = post.userId;
        this.id = post.id;
        this.title = post.title;
        this.body = post.body
    }
}

