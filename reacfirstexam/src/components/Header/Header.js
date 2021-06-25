import React from "react";
import ReactDom from "react-dom";

import "../../assets/css/header.css";
import "./Header.css";
import Navbar from "../Navbar/Navbar.js";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textcolor: props.textcolor,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.textcolor !== this.state.textcolor) {
      this.setState({ textcolor: this.props.textcolor });
    }
  }

  render() {
    return (
      <div className="header-container">
        <Navbar textcolor={this.state.textcolor}></Navbar>
      </div>
    );
  }
}

export default Header;
