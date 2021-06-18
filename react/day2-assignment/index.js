//Uncaught TypeError: Failed to resolve module specifier "react". Relative references must start with either "/", "./", or "../".
//add path
// import {React} from "react";
// import {ReactDOM} from "react-dom";
// import {HelloMessage} from "./src/components/HelloMessage.js";


class HelloMessage extends React.Component {
  render() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
}
ReactDOM.render(
  React.createElement(HelloMessage, {
    name: "Taylor",
  }),
  document.getElementById("root")
);
