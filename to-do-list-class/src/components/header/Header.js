import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {

  render() {
    return (
      <header>
        <div className="header">Create your To-Do-List</div>
        <div>
          <button
            className="myButton1 myButton"
            onClick={this.props.handleFlag}
            value="Dashboard"
          >
            Dashboard
          </button>
          <button
            className="myButton2 myButton"
            onClick={this.props.handleFlag}
            value="todoList"
          >
            To-do-list
          </button>
        </div>
      </header>
    );
  }
}
