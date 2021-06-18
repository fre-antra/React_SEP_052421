import React from "rect";
import ReactDOM from "react-dom";
import HelloMessage from "./src/components/HelloMessage/HelloMessage";

ReactDOM.render(
    React.createElement(HelloMessage, {
        name: "Taylor",
    }),
    document.getElementById("root")
);
