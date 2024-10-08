import React, {Component, Fragment} from "react";
import ProductData from "../../data/ProductData";
import "./CartComponentStyle.css";

class CartComponent extends Component {

    constructor(){
        super();
        this.state = {
            number: 0
        }

        this.Increase = this.Increase.bind(this)
        this.Decrease = this.Decrease.bind(this)
    }

    Increase () {
        this.setState({
            number: this.state.number+1
        });
    }

    Decrease () {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number-1
            });
        }
    }

    render () {
        return(
            <Fragment>
                {this.state.number === 0 ? 
                    <>
                        <button className="cart-button" onClick={this.Increase}>
                            <span>Add to cart</span>
                        </button>
                    </>
                    :
                    <div className="CartNumber">
                        <button className="btn" onClick={this.Decrease}>-</button>
                            <span>{this.state.number}</span>
                        <button className="btn" onClick={this.Increase}>+</button>
                    </div>
                }
            </Fragment>
        )
    }
}

export default CartComponent;