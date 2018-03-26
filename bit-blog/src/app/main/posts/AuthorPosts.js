import React, { Component } from "react"
import { Link } from 'react-router-dom'

import { authorsService } from "../../../service/AuthorsService";

export class AuthorPosts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        authorsService.getAuthorPosts(this.props.authorId)
            .then(posts => {
                this.setState({ posts })
            })
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => <Link to={`/posts/${post.id}`} key={post.id}>{post.title}</Link>)}

            </div>
        )
    }
}