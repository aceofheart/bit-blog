import React from "react";
import "./SingleAuthor.css"

export const SingleAuthor = (props) => {
    return (
        <div className="container">
            <div className="col s12 m7">
                <div className="card horizontal">
                    <div className="card-image">
                        <img alt="" src="http://via.placeholder.com/200" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h3>Name Surname</h3>
                            <p>username: my_username</p>
                            <p>email: my_mail@gmail.com</p>
                            <p>phone: 1-888-999-6</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="col s12 m7">
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <h3>Address</h3>
                            <p>street: Bla Bla</p>
                            <p>city: Belgrade</p>
                            <p>zipcode: 778854</p>
                            <iframe title="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.429539899425!2d20.45832396595663!3d44.81281322909863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aae746ce8b7%3A0x1e557c4360cc6848!2z0KLQtdGA0LDQt9C40ZjQtSwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1521810804720" ></iframe>
                        </div>

                    </div>
                </div>
            </div>
            <hr/>
            <div className="col s12 m7">
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <h3>Company</h3>
                            <p>name: Gwen...</p>
                            <p>slogan: 778820</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    )
}








