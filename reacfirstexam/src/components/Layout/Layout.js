import React from "react";
import ReactDom from "react-dom";


import "../../assets/css/variables.css"
import "../../assets/css/layout.css"
import "../../assets/css/index.css"

import Header from "../Header/Header"
import Posts from "../Posts/Posts.js"


//import './Layout.css';

class Layout extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      color:"black",
      active:0,
    }
  }

  changeTitleHelper=()=>{
    this.setState({color:"red"});
  }

  render(){
    return (
      <>
        <Header color={this.state.color}></Header>
        <Posts color={this.state.color} active={this.state.active}></Posts>
      </>
    );
  }
}

export default Layout;