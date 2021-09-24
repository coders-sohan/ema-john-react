import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Order Summary</h3>
            <h5 style={{textAlign: 'center'}}>Items Ordered: {props.cart.length}</h5>
            <p className="cart-items"><span style={{fontWeight: 'bold'}}>Total:</span><span>{total.toFixed(2)}</span></p>
            <p className="cart-items"><span style={{fontWeight: 'bold'}}>Shipping:</span><span>{shipping}</span></p>
            <p className="cart-items"><span style={{fontWeight: 'bold'}}>Tax:</span><span>{tax.toFixed(2)}</span></p>
            <p className="cart-items"><span style={{fontWeight: 'bold'}}>Grand Total:</span><span>{grandTotal.toFixed(2)}</span></p>
        </div>
    );
};

export default Cart;