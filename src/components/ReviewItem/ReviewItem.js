import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product
    const reviewItemStyle={
        borderBottom: 'solid 1px lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className= "product-name">{name}</h4>
    <p>Quantity: {quantity}</p>
    <p>Price: ${price}</p>
    <br/>
    <button 
    className="main-button"
    onClick = {() => props.removeProduct(key)}
    >Remove</button>
        </div>
    );
};

export default ReviewItem;