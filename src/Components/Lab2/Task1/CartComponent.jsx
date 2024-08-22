import React, {Component} from "react";

import "./CartComponentStyle.css";

class CartComponent extends Component {

    constructor(){
        super();
        this.state = {
            number: 1
        }

        this.Increase = this.Increase.bind(this)
        this.Decrease = this.Decrease.bind(this)
    }

    Increase () {
        this.setState({
            number: this.state.number+1
        });
        this.state.number = this.state.number+1;
    }

    Decrease () {
        if (this.state.number > 1) {
            this.setState({
                number: this.state.number-1
            });
            this.state.number = this.state.number-1;
        }
    }

    render () {
        return(
            <dev className="CartNumber">
                <button className="btn" onClick={this.Decrease}>-</button>
                <span>{this.state.number}</span>
                <button className="btn" onClick={this.Increase}>+</button>
            </dev>
        )
    }
}

export default CartComponent;