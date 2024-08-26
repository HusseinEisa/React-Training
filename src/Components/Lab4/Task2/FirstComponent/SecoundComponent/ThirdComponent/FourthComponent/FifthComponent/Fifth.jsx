import React, {Component} from "react";
import { ContextConsumer } from "../../../../../Context/Context";

class Fifth extends Component {
    render(){
        return(
            <div>
                <ContextConsumer>
                    {value => (
                        <div>
                            <h5>Fifth Component: {value}</h5>
                        </div>
                    )}
                </ContextConsumer>
            </div>
        )
    }
}

export default Fifth;