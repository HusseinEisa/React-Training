import React, {Component} from "react";
import Fourth from "./FourthComponent/Fourth";
import { ContextConsumer } from "../../../Context/Context";

class Third extends Component {
    render(){
        return(
            <div>
                <ContextConsumer>
                    {value => (
                        <div>
                            <h3>Third Component: {value}</h3>
                        </div>
                    )}
                </ContextConsumer>
                <Fourth />
            </div>
        )
    }
}

export default Third;