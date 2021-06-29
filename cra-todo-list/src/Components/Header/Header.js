import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  render() {
    const { handleChangeActivePage } = this.props;
    return (
      <div className="header-container">
        <div className="header__title">React CRA Demo</div>
        <div className="nav-items">
          <h5
            className="nav__item"
            onClick={() => handleChangeActivePage("dashboard")}
          >
            Dahsboard
          </h5>
          <h5
            className="nav__item"
            onClick={() => handleChangeActivePage("todolist")}
          >
            TodoList
          </h5>
        </div>
      </div>
    );
  }
}
