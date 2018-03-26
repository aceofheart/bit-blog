import React, { Component } from 'react';
import { Link } from "react-router-dom"

export class NewPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newTitle: "",
            newBody: ""
        }
    }

    changeTitleHandler = (event) => {
        // console.log(event.target.value);
        this.setState({
            newTitle: event.target.value,
        })
    }

    changeBodyHandler = (event) => {

        this.setState({
            newBody: event.target.value
        })

    }

    fetchPost = (event) => {

        event.preventDefault();

        return fetch('http://localhost:3004/posts', {
            method: "POST",
            body: JSON.stringify({
                title: this.state.newTitle,
                body: this.state.newBody,
                userId: 9
            })
        })


    }


    render() {
        return (
            <div className='container' >
                <h2>NEW POST</h2>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <h5>Title</h5>
                            <div className="input-field col s6">
                                <input onChange={this.changeTitleHandler} value={this.state.newTitle} placeholder="title" name="newTitle" id="input_text" type="text" />

                            </div>
                        </div>
                        <div className="row">
                            <h5>Content</h5>
                            <div className="input-field col s12">
                                <textarea onChange={this.changeBodyHandler} value={this.state.newBody} name="newBody" id="textarea2" className="materialize-textarea"></textarea>

                            </div>
                        </div>
                    </form>
                </div>
                <Link to='/' >  <button className="btn waves-effect waves-light" type="submit" name="action">Save
            <i className="material-icons right"></i>
                </button></Link>
                <Link to='/' className="waves-effect waves-light btn">Cancel</Link>



            </div>
        )
    }

}