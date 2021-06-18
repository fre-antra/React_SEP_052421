import React from "../../node_modules/react";

class HelloMessage extends React.Component {
  render() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
}

export default HelloMessage;