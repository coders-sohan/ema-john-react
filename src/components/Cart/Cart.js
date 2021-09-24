import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    const tax = 20/100;
    for (const product of cart) {
        if (total > 100) {
            total = total * tax;
        }
        total = total + product.price;
    }
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Order Summary</h3>
            <h5 style={{textAlign: 'center'}}>Items Ordered: {props.cart.length}</h5>
            <p></p>
            <p>Total: {total}</p>
            <p>Tax: {tax}</p>
        </div>
    );
};

export default Cart;