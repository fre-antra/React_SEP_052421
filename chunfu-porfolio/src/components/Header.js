import React from 'react';
import './Header.css';
import Link from './Link';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img alt='Home logo' src='/images/logo.svg'></img> 
            </div>
            <div className="header-right">
                <div className="header-right-items">Home</div>
                <div className="header-right-items">Portfolio</div>
                <div className="header-right-items">Contact</div>
            </div>
        </header>
    )
}

export default Header;
