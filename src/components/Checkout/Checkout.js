import React from 'react'
import Subtotal from './Subtotal/Subtotal'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className="Checkout">

            <div className="CheckoutLeft">
                <div>
                    <h2 className="CheckoutTitle">Your Shopping Cart</h2>
                </div>
            </div>

            <div className="CheckoutRight">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
