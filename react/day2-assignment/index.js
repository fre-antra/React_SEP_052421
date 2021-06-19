//Uncaught TypeError: Failed to resolve module specifier "react". Relative references must start with either "/", "./", or "../".
//add path
import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./src/components/HelloMessage.js";
import './index.css';
// ReactDOM.render(
//   React.createElement(HelloMessage, {
//     name: "Taylor",
//   }),
//   document.getElementById("root")
// );
ReactDOM.render(
  <HelloMessage name= "Taylor"/>,
  document.getElementById('root')
)