import React from "react";

export default class HelloMessage extends React.Component {
  render() {
    // return React.createElement("h2", null, this.props.message, " success!");
    return <h2>{this.props.message} success!</h2>;
  }
}
