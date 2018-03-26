import React, { Component } from "react";
import { Link } from "react-router-dom";
import { postService } from '../../../service/PostService'
import { AuthorName } from './AuthorName'
import { authorsService } from "../../../service/AuthorsService"
import { AuthorPosts } from "./AuthorPosts";



export class SinglePostItem extends Component {
  state = {
    post: null
  }



  componentDidMount = () => {
    const id = this.props.match.params.id
    postService.getPostDetails(id)
      .then((post) => {
        this.setState({
          post
        })
      })
  }

  componentWillReceiveProps = (nextProps) => {
    const id = nextProps.match.params.id
    postService.getPostDetails(id)
      .then((post) => {
        this.setState({
          post
        })
      })
  }

  render() {

    if (!this.state.post) {
      return <p>Loading...</p>
    }

    return (
      // @author: selena
      <div className="container">
        <Link to="/">Back</Link>
        <div className="col-12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.state.post.title}</span>
              {this.state.post && <AuthorName id={this.state.post.authorId} />}
              <p>{this.state.post.body}</p>
            </div>
          </div>
        </div>
        <hr />
        <p>3 more posts from same author</p>
        <ul>
          <AuthorPosts authorId={this.state.post.authorId} />
        </ul>
      </div >
    )
  }
}


