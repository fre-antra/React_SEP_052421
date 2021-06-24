import React from "react";
import ReactDom from "react-dom";

import Header from "../header/Header.js";
import Todolist from "../todolist/Todolist.js";
import "./Layout.css";

const Layout = function () {
  return (
    <>
      <header className="header">
        <Header></Header>
      </header>
      <main className="content">
        <Todolist></Todolist>
      </main>
    </>
  );
};

export default Layout;
