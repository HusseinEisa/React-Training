import React, { Component } from 'react';

class ClassStates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isloggedin: false,
            subscription: "Guest"
        }
    }
    handleLogin = () => {
        this.setState({
            isloggedin: true,
            subscription: "You Now"
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.subscription}</h1>
                <h1>{this.state.isloggedin ? "Logged in" : ""}</h1>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default ClassStates;
