import React, { Component } from "react"
import { SinglePost } from "./SinglePost"
import { Link } from 'react-router-dom'
import { postService } from '../../../service/PostService'

export class PostList extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        postService.getData()
            .then(myPosts => {
                const firstTen = myPosts.slice(0, 9)

                this.setState({
                    posts: firstTen
                })
            })
    }

    renderPosts = () => {
        if (this.state.posts.length) {
            return (
                this.state.posts.map(post => (
                    <div key={post.id} className='row'>
                        <Link to={`./posts/${post.id}`}><SinglePost title={post.title} body={post.body} /></Link>
                    </div>
                ))
            )
        }
    }


    render() {
        return (
            <div className='container'>
                <Link to='/posts/new' className="waves-effect waves-light btn-large">Create new post</Link>
                <h4>Posts</h4>
                {this.renderPosts()}
            </div>
        )
    }
}