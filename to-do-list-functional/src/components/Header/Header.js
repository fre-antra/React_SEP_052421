import React from 'react'
import Logo from "../Logo/Logo";
import "./Header.css";

export default function Header({handleNav}) {
  return (
    <div className="header-list">
      <Logo></Logo>
      <nav className="nav">
        <a onClick={handleNav}>DashBoard</a>
        <a onClick={handleNav}>TodoList</a>
      </nav>
    </div>
  );
}
