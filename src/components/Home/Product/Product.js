import React from 'react'
import { useStateValue } from '../../../StateProvider'
import './Product.css'

const Product = ( { title, image, price, rating } ) => {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="Product">
            <div className="ProductInfo">
                <p>{title}</p>
                <p className="ProductPrice">
                <strong>₹</strong>
                <strong> {price}</strong>
                </p>
                <div className="ProductRating"> 
                    {Array(rating).fill().map((_, i) => (
                        <span>&#11088;</span>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
