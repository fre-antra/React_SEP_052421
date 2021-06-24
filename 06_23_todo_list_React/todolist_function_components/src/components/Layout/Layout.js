import React from 'react';
import Header from '../Header/Header';
import './Layout.css';

const Layout = (props) => {
  return (
    <>
      <header className='header'>
        <Header></Header>
      </header>
      <main className="content">{props.children}</main>
    </>
  );
};

export default Layout;