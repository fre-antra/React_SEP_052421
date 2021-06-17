// check lock to find stable version source
// webpack+babel+react

//00. "build": "NODE_ENV=production node node_modules/.bin/webpack && cp ./index.html build/index.html"
// these command run in async way, and NODE_ENV=production webpack should not use && symbol to pass arguments to this process

//01. npm install webpack webpack-cli webpack-dev-server --save-dev
//02. npm install path html-webpack-plugin --save-dev
//03. webpack.config.js
//04. npm install --save-dev @babel/core @babel/node @babel/cli @babel/preset-env @babel/preset-react babel-loader
//05. touch .babelrc
//global: babel.config.js, local: .babelrc

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
if (typeof window !== "undefined") {
  ReactDOM.render(element, document.getElementById("root"));
}
