import React, {Component} from "react";
import Fifth from "./FifthComponent/Fifth";

class Fourth extends Component {
    render(){
        return(
            <div>
                <h4>Forth Component: </h4>
                <Fifth />
            </div>
        )
    }
}

export default Fourth;