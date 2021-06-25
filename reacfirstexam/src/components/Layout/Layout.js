import React from "react";
import ReactDom from "react-dom";

import "../../assets/css/variables.css";
import "../../assets/css/layout.css";
import "../../assets/css/index.css";

import Header from "../Header/Header";
import Posts from "../Posts/Posts.js";

//import './Layout.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textcolor: "black",
      active: 0,
    };
  }

  changeTitleHelper = (c, aid) => {
    this.setState({ textcolor: c, active: aid });
  };

  render() {
    return (
      <>
        <Header textcolor={this.state.textcolor}></Header>
        <Posts
          active={this.state.active}
          setColorCallback={this.changeTitleHelper}
        ></Posts>
      </>
    );
  }
}

export default Layout;
