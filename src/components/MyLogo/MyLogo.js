import React from 'react';
import logo from '../../logo.svg';
import './MyLogo.css';

const MyLogo = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
};

export default MyLogo;