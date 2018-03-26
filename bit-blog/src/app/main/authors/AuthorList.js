import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SingleAuthorItem } from "./SingleAuthorItem";
import { authorsService } from "../../../service/AuthorsService";

export class AuthorList extends Component {

    state = {
        authors: []
    }

    componentDidMount() {
        this.loadAuthors();
    }

    loadAuthors = () => {
        authorsService.getData()
            .then(myAuthors => {
                this.setState({
                    authors: myAuthors
                })
            })
    }

    renderAuthors = () => {
        if (this.state.authors.length) {
            return (
                this.state.authors.map(author => (
                    <div key={author.id} className='row'>
                        <Link to={`./authors/${author.id}`}><SingleAuthorItem name={author.name} /></Link>
                    </div>
                ))
            )
        }
    }

    render() {
        return (
            <div className='container'>
                <h4>Authors</h4>
                {this.renderAuthors()}
            </div>
        )
    }
}


