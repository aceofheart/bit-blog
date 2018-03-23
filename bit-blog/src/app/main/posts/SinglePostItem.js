import React from "react";
import {Link} from "react-router-dom"


export const SinglePostItem = (props) => {
    return (
    <div className="container"> 
    <Link to="/">Back</Link>
    <div class="col-12">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Post title</span>
          <Link to="/authors/2">Author Name</Link>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.I am a very simple card. 
          I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively</p>
        </div>
      </div>
    </div>
    <hr/>
    <p>3 more posts from same author</p>
    <Link to="/posts/2">Title-1</Link><br/>
    <Link to="/posts/1">Title-2</Link><br/>
    <Link to="/posts/3">Title-3</Link>
    </div>


    )
}
