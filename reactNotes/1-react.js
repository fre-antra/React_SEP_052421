// check lock to find stable version source
// webpack+babel+react

//npm install webpack webpack-cli webpack-dev-server --save-dev

import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return React.createElement("div", null, "Hello", this.props.name);
  }
}

const element = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
