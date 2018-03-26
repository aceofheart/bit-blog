import { Post } from '../entities/Post'

class PostService {
    getData() {
        return fetch('http://localhost:3004/posts')
            .then(response => response.json())
            .then(response => {
                return response.map(post => {
                    return new Post(post)
                })

            })
    }

    getPostDetails(postId) {
        return fetch(" http://localhost:3004/posts/" + postId)
            .then(response => response.json())
            .then(response => {
                return new Post(response)
            })
    }


}



export const postService = new PostService()