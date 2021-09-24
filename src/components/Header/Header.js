import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="header">
            <img className="logo" src={logo} alt="Logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory Here</a>
            </nav>
            <div className="input-div">
                <div className="search-field">
                    <div className="input-field">
                        <input type="text" />
                    </div>
                    <div className="input-icon">
                        <i style={{color: 'white', fontSize: '24px'}}>{cartIcon}</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;