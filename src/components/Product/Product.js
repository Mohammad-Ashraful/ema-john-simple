import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small> Seller: </small>{seller}</p>
                <p><small>Price:</small> $ {price}</p>
                <br />
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button
                onClick = {() => props.handleAddProduct(props.product)}
                className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;