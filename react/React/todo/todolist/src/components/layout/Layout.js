import React from "react";
import ReactDom from "react-dom";

import Header from "../header/Header.js";
import Todolist from "../todolist/Todolist.js";
import "./Layout.css";

class Layout extends React.Component {
  render() {
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
  }
}

export default Layout;
