import React from 'react'
import Subtotal from './Subtotal/Subtotal'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../../StateProvider'

const Checkout = () => {
    const [{cart}, dispatch] = useStateValue();
    
    return (
        <div className="Checkout">
            <div className="CheckoutLeft">
                <div>
                    <h2 className="CheckoutTitle">Your Shopping Cart</h2>
                </div>
                {cart.map((item) => (
                    <CheckoutProduct 
                    image = {item.image}
                    title = {item.title}
                    price = {item.price}
                    rating = {item.rating}
                    />
                ))}
            </div>

            <div className="CheckoutRight">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
