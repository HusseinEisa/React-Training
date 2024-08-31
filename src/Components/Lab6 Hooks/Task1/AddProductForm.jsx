import React, { useState } from 'react'
import './ProductFormStyle.css';
import Product from '../../data/ProductData';


function AddProductForm() {
    const [product, setProduct] = useState({
        image: '',
        name: '',
        price: '',
        description: '',
        category: '',
        Status: false,
    });
    
    const [Products, setProducts] = useState([...Product]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts([...Products, 
            {
                id: Products.length + 1,
                ...product,
            }
        ]);
        console.log(Products);
    }
    
    return (
        <div className="ProductFormContainer">
            <form className="ProductForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input required="" name="name" id="name" type="text" onChange={e => setProduct({...product, name: e.target.value})} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="Category">Product Category</label>
                    <input required="" name="category" id="category" type="text" onChange={e => setProduct({...product, category: e.target.value})} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="price">Product Price</label>
                    <input required="" name="price" id="price" type="text" onChange={e => setProduct({...product, price: e.target.value})} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="textarea">Product Description</label>
                    <textarea required="" cols="50" rows="10" id="textarea" name="textarea" onChange={e => setProduct({...product, description: e.target.value})}></textarea>
                </div>
                
                <div className="form-group">
                    <label htmlFor="image">Product Image</label>
                    <input required="" name="image" id="image" type="file" onChange={e => setProduct({...product, image: e.target.value})} />
                </div>
                
                <button type="submit" className="form-submit-btn">Add Product</button>
            </form>
        </div>
    )
}

export default AddProductForm;