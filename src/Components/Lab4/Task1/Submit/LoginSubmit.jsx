import React, {Component} from "react";

import './CardStyle.css'

class LogInSubmit extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="SubmitCard">
                <p className="heading">Welcome:<br />{this.props.email}</p>
                <p>You are logged in to the account at </p>
                <p>{this.props.date.toLocaleString()}</p>
            </div>
        )
    }
}

export default LogInSubmit;