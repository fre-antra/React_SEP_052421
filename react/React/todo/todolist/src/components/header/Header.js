import React from "react";
import ReactDom from "react-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>
          <span className="title">TODO</span> List
        </h1>
      </>
    );
  }
}

export default Header;
