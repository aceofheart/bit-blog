import React from 'react';
import {Link} from "react-router-dom"

export const NewPost = () => {
    return (
        <div className='container'>
            <h2>NEW POST</h2>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <h5>Title</h5>
                        <div className="input-field col s6">
                            <input placeholder="title" id="input_text" type="text" />
                            <label forHtml="input_text"></label>
                        </div>
                    </div>
                    <div className="row">
                        <h5>Content</h5>
                        <div className="input-field col s12">
                            <textarea id="textarea2" className="materialize-textarea"></textarea>
                            <label forHtml="textarea2"></label>
                        </div>
                    </div>
                </form>
            </div>
       <Link to='/' >  <button className="btn waves-effect waves-light" type="submit" name="action">Save
    <i className="material-icons right"></i>
            </button></Link>
            <Link to='/' className="waves-effect waves-light btn-large">Cancel</Link>



        </div>
    )


}