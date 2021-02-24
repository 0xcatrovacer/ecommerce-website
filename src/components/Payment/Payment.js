import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import './Payment.css'

const Payment = () => {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className="Payment">
            <div className="PaymentContainer">

                <h1>Checkout (
                <Link to='/checkout' style={{ textDecoration: 'none' }}>{cart.length} items</Link>
                )</h1>

                <div className="PaymentSection">
                    <div className="PaymentTitle">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="PaymentAddress">
                        <p>{user ? user.email : ''}</p>
                        <p>221/B Baker Street</p>
                        <p>St. Marylebone, London</p>
                    </div>
                </div>

                <div className="PaymentSection">
                    <div className="PaymentTitle">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="PaymentItems">
                        {cart.map((item) => (
                            <CheckoutProduct
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="PaymentSection">
                    <div className="PaymentTitle">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="PaymentDetails">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
