import { Author } from "../entities/Author";
import { Post } from "../entities/Post";

class AuthorsService {
    getData() {
        return fetch('http://localhost:3004/users')
            .then(response => response.json())

    }

    getAuthorName(authorId) {
        return fetch("http://localhost:3004/users/" + authorId)
            .then(response => response.json())
            .then(response => {
                return new Author(response)

            })

    }

    getAuthorPosts(authorId) {
        return fetch("http://localhost:3004/posts?userId=" + authorId)
            .then(response => response.json())
            .then(response => {
                return response.map(post => new Post(post))
            })

    }
}
export const authorsService = new AuthorsService();
