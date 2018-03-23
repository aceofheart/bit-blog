import React, { Component } from "react"
import { Link } from "react-router-dom";
import { SingleAuthorItem } from "./SingleAuthorItem";




export class AuthorList extends Component {
    render() {
        return (
            <div className='container'>
                <h4>Authors</h4>
                <div className='row'>
                
                    <Link to="/authors/1"><SingleAuthorItem/></Link>
                </div>
                <div className='row'>
                    <Link to="./authors/2"><SingleAuthorItem/></Link>
                </div>
                <div className='row'>
                    <Link to="./authors/3"><SingleAuthorItem/></Link>
                </div>
            </div>
        )
    }
}


