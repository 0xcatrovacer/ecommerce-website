import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase';
import { useStateValue } from '../../../StateProvider';
import './Orders.css'

const Orders = () => {
    const [{ cart, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot((snapshot) => (
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        )
    }, [])

    return (
        <div className="Orders">

        </div>
    )
}

export default Orders
