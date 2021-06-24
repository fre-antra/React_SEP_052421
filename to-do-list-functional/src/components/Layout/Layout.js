import React from 'react'
import Header from "../Header/Header";
import "./Layout.css";

export default function Layout({ children, handleNav }) {
  return (
    <>
      <header className="header">
        <Header handleNav ={handleNav}/>
      </header>
      <main className="content">{children}</main>
    </>
  );
}
