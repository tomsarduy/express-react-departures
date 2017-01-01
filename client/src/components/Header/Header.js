import React from 'react';
import logo from './logo-trainline.svg';
import './Header.scss';

export default () =>
(
    <div className="app-header"> 
        <div className="container">
            <img src={logo} className="app-header__logo" alt="logo"/>
        </div>
    </div>
);