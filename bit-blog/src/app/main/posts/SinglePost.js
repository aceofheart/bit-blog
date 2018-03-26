import React from "react";

export const SinglePost = (props) => {
  return (

    <div className="col-12">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.title}</span>
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  )
}



