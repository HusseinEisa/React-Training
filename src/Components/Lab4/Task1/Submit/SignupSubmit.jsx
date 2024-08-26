import React, {Component} from "react";

import './CardStyle.css'

class SignUpSubmit extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="SubmitCard">
                <p className="heading">Welcome: {this.props.name}</p>
                <p>Your Email is: {this.props.email}</p>
                <p>You are signed up to the account at</p>
                <p>{this.props.date.toLocaleString()}</p>
            </div>
        )
    }
}

export default SignUpSubmit;