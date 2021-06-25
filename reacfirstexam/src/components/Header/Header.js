import React from "react";
import ReactDom from "react-dom";


import '../../assets/css/header.css';
import "./Header.css";
import Navbar from "../Navbar/Navbar.js"

class Header extends React.Component {
  constructor(props)
  {
    this.state={
      color:props.color,
    }
  }

render(){
  return (
    <div className="header-container">
      <Navbar color={this.state.color}></Navbar>
    </div>
  );
}
  
}

export default Header;
