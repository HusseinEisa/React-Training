import React, { Component } from "react";
import axios from "axios";
import "./CommentsFormStyle.css";

class CommentsForm extends Component {
    
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            body: ""
        };
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }
        
    HandleChange = (event) => {
        event.preventDefault();
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }
    
    HandleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/comments', this.state)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }
    
    render() {
        return (
            <div className="Container">
                <div className ="FormCard">
                    <span className="FormTitle">Leave a Comment</span>
                    <form className="CommentsForm" onSubmit={this.HandleSubmit}>
                        <div className="Inputs">
                            <input value={this.state.name} onChange={this.HandleChange} name="name" type="text" required="" />
                            <label for="name">Name</label>
                        </div>
                        <div className="Inputs">
                            <input value={this.state.email} onChange={this.HandleChange} name="email" type="email" id="email" required="" />
                            <label for="email">Email</label>
                        </div>
                        <div className="Inputs">
                            <textarea value={this.state.body} onChange={this.HandleChange} name="body" rows="5" required=""></textarea>
                            <label for="comment">Comment</label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentsForm;