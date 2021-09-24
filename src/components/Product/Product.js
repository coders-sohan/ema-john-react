import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, star, stock } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props);
    return (
        <div className="product">
            <div>
                <img src={img} alt={name} />
            </div>
            <div style={{paddingLeft: '20px'}}>
                <h2 style={{color: 'blue'}}>{name}</h2>
                <p>By: <b>{seller}</b></p>
                <p>Price: <b>${price}</b></p>
                <p>Rating: <b>{star}/5</b></p>
                <p><small>Only <b>{stock}</b> left in stock - order soon</small></p>
                <button onClick={() => props.handelAddToCart(props.product)} className="btn-regular">{cartIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;