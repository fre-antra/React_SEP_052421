import React from 'react'
import Logo from "../Logo/Logo";
import "./Header.css";

export default function Header({handleNav}) {
  return (
    <div className="header-list">
      <Logo></Logo>
      <nav className="nav">
        <button onClick={handleNav}>DashBoard</button>
        <button onClick={handleNav}>TodoList</button>
      </nav>
      
    </div>
  );
}
