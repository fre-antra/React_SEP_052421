import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = ({ handleChangeActivePage }) => {
  return (
    <div className="header-list">
      <Logo></Logo>
      <nav className="nav">
        <a onClick={() => handleChangeActivePage('Dashboard')}>Dashboard</a>
        <a onClick={() => handleChangeActivePage('TodoList')}>TodoList</a>
      </nav>
    </div>
  );
};

export default Header;
