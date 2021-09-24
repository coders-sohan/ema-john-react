import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
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
                        <i style={{color: 'white'}}>Cart icon</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;