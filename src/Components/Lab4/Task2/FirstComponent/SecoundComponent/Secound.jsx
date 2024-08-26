import React, {Component} from "react";
import Third from "./ThirdComponent/Third";

class Secound extends Component {
    render(){
        return(
            <div>
                <h2>Second Component: </h2>
                <Third />
            </div>
        )
    }
}

export default Secound;