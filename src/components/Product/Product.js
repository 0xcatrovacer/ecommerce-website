import React from 'react'
import './Product.css'

const Product = ( { title, image, price, rating } ) => {
    return (
        <div className="Product">
            <div className="ProductInfo">
                <p>{title}</p>
                <p className="ProductPrice">
                <strong>$</strong>
                <strong> {price}</strong>
                </p>
                <div className="ProductRating"> 
                    {Array(rating).fill().map((_, i) => (
                        <span>&#11088;</span>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
