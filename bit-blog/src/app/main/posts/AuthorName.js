import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { authorsService } from "../../../service/AuthorsService";


export class AuthorName extends Component {

    constructor(props) {
        super(props)
        this.state = {
            author: null
        }
    }

    componentDidMount() {
        authorsService.getAuthorName(this.props.id)
            .then(author => {
                console.log(author);
                this.setState({ author })
            })
    }

    render() {
        const { author } = this.state;

        return (
            <React.Fragment>
                {author && <div>
                    <Link to={`/authors/${author.id}`} key={author.id}>{author.fullName}</Link>
                </div>}
            </React.Fragment>
        )
    }
}


