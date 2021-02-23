import React from 'react'
import { useStateValue } from '../../../StateProvider'
import './CheckoutProduct.css'

const CheckoutProduct = ( {image, title, price, rating} ) => {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            title: title,
        })
    }

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
                <button onClick={removeFromCart}>Remove from Cart</button>    
            </div>
        </div>
    )
}

export default CheckoutProduct
