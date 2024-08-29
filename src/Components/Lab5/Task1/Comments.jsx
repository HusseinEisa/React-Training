import React, { Component } from "react";
import axios from "axios";
import "./CommentStyle.css";

class Comments extends Component {
    
    constructor() {
        super();
        this.state = {
            comments: []
        };
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => this.setState({ comments: response.data }))
            .catch(error => console.log(error));
    }
    
    render() {
        return (
            <div className="CommentsContainer">
                <h1>All Comments [{this.state.comments.length}]</h1>
                <div className="Comments">
                    {this.state.comments.map(comment => (
                        <div key={comment.id} className="CommintCard">
                            <div className="bg">
                                <h4>Name: {comment.name}</h4>
                                <h5>Email: {comment.email}</h5>
                                <p>Body: {comment.body}</p>
                            </div>
                            <div className="blob"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Comments;