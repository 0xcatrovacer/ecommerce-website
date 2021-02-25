import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import './Payment.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';
import { getCartTotal } from '../../reducer';
import { db } from '../../firebase';

const Payment = () => {
    const [{ cart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    const history = useHistory()

    useEffect(() => {

        const getClientSecret = async () => {
            const res = await axios({
                method: 'post',
                url: `/payments/create/?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(res.data.clientSecret);
        }

        getClientSecret();

    }, [cart])

    console.log(clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART',
            })

            history.replace('/orders')
        })
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    var totalprice = 0;

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

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="PaymentPriceContainer">
                                <CurrencyFormat
                                    renderText={() => (
                                        <div>
                                            <p>
                                                Order Total: {cart.map((item) => {
                                                totalprice = totalprice + item.price;
                                            })}
                                                <strong> ₹ {totalprice}</strong>
                                            </p>
                                        </div>
                                    )}
                                    decimalScale={2}
                                    value={0}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>

                            {error && <div>{error.message}</div>}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
