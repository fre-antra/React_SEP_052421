import React from 'react';
import Header from '../Header/Header';
import './Layout.css';

const Layout = ({ children, handleChangeActivePage }) => {
  return (
    <>
      <header className="header">
        <Header handleChangeActivePage={handleChangeActivePage}></Header>
      </header>
      <main className="content">{children}</main>
    </>
  );
};
export default Layout;
