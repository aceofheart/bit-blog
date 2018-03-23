import React, { Component } from "react"
import { SinglePost } from "./SinglePost"
import { Link } from 'react-router-dom'


export class PostList extends Component {
    render() {
        return (
            <div className='container'>
                <Link to='/posts/new' class="waves-effect waves-light btn-large">Create new post</Link>
                <h4>Posts</h4>
                <div className='row'>
                    <Link to='/posts/1'> <SinglePost /> </Link>
                    <Link to='/posts/2'> <SinglePost /> </Link>
                    <Link to='/posts/3'> <SinglePost /> </Link>
                    <Link to='/posts/4'> <SinglePost /> </Link>

                </div>
            </div>
        )
    }
}