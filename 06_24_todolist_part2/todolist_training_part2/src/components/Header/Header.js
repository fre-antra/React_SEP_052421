import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className='header-list'>
        <Logo></Logo>
        <nav className='nav'>
          <a href="!#">Dashboard</a>
          <a href="!#">TodoList</a>
        </nav>
      </header>
    );
  }
}

export default Header;