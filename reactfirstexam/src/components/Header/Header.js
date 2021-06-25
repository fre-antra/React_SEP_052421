import React from 'react';
import './Header.css';

const Header = ({color}) => {
    return (
        <div>
            <h2 
            className="header__title" 
            style={{color:`${color}`}}
            >
            "Neque porro quisquam est qui dolorem ipsum quia dolor 
            sit amet, consectetur, adipisci velit..."
            </h2>
        </div>
    )
}

export default Header;
