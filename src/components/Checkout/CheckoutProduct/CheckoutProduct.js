import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = ( {image, title, price, rating} ) => {
    return (
        <div className="CheckoutProduct">
            <img className="CheckoutProductImage" src={image} alt=""/>
            <div className="CheckoutProductInfo">
                <p className="CheckoutProductTitle">{title}</p>
                <p className="CheckoutProductPrice">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProductRating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span>&#11088;</span>
                    ))}
                </div>
                <button>Remove from Cart</button>    
            </div>
        </div>
    )
}

export default CheckoutProduct
