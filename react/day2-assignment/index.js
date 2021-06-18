//Uncaught TypeError: Failed to resolve module specifier "react". Relative references must start with either "/", "./", or "../".
//add path
import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./src/components/HelloMessage.js";

ReactDOM.render(
  React.createElement(HelloMessage, {
    name: "Taylor",
  }),
  document.getElementById("root")
);
