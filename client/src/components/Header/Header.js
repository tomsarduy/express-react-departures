import React from 'react';
import logo from './logo-trainline.svg';
import './Header.scss';

const Header = () =>
(
    <div className="app-header"> 
        <div className="container">
            <img src={logo} className="app-header__logo" alt="logo"/>
        </div>
    </div>
);

export default Header;