import React from "react";
import { Link } from "react-router-dom"

export const Header = (props) => {
    return (
        <nav className="cyan darken-1">
            <div className="container">
            <div className="nav-wrapper">
                <h2 className="brand-logo">RND BLG</h2>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/author">Author</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            </div>
        </nav>

    )

}
