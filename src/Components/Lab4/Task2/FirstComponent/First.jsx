import React, {Component} from "react";
import Secound from "./SecoundComponent/Secound";
import { ContextConsumer } from "../Context/Context";

class First extends Component {
    render(){
        return(
            <div>
                <ContextConsumer>
                    {value => (
                        <div>
                            <h1>First Component: {value}</h1>
                        </div>
                    )}
                </ContextConsumer>
                <Secound />
            </div>
        )
    }
}

export default First;