import React, { Component } from "react";
import Header from "../Header/Header";
import "./Layout.css";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <header className="header">
          <Header />
        </header>
        <main className="content">{children}</main>
      </>
    );
  }
}
