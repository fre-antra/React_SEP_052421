import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./components/HelloMessage/HelloMessage";

const HelloName = React.createElement(HelloMessage, {
    name: "Taylor",
});
ReactDOM.render(HelloName, document.getElementById("root"));
