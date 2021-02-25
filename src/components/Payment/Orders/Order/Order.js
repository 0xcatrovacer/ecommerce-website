import React from 'react'
import CheckoutProduct from '../../../Checkout/CheckoutProduct/CheckoutProduct'
import moment from 'moment'
import './Order.css'
import CurrencyFormat from "react-currency-format"

const Order = ({ order }) => {
    return (
        <div className="Order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="OrderId">
                <small>{order.id}</small>
            </p>

            {order.data.cart.map((item) => (
                <CheckoutProduct
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="OrderTotal">Order Total: {value} </h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

        </div>
    )
}

export default Order
