import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../../StateProvider'

const Subtotal = () => {
    const [{cart}, dispatch] = useStateValue();
    var totalprice = 0;
    return (
        <div className="Subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({cart.length} items): { cart.map((item) => {
                                totalprice = totalprice + item.price;
                            }) }
                            <strong> ₹ {totalprice}</strong>
                        </p>
                        <small className="SubtotalGift">
                        <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
