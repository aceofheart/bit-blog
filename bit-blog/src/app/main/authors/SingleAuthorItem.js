import React from "react"

export const SingleAuthorItem = (props) => {
    return (
        <div className="col-12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <h2>{props.name}</h2>
                </div>
            </div>
        </div>
    )
}