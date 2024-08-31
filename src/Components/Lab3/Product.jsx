import React, {Component} from "react";

import "./ProductStyle.css"
import CartComponent from '../Lab2/Task1/CartComponent';
import products from "../data/ProductData"

class Product extends Component {
    
    render() {
        return(
            <div className="ProductsContainer">
                {products.map((Product) => (
                    <div className="ProductCard">
                        <div className="top">
                            <img src={Product.img} alt={Product.name} />
                            <p className="title">
                                {Product.name}
                            </p>
                        </div>
                        <p className="desc">
                            {Product.description}
                        </p>
                        <div className="Bottom">
                            <span className="Category">{Product.category}</span>
                            <span className="Price">{Product.price}$</span>
                        </div>
                        <div className="Counter">
                            <CartComponent />
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Product;