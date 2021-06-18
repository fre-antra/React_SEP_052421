import React from "../../node_modules/react";

// class HelloMessage extends React.Component {
//   render() {
//     return React.createElement("div", null, "Hello ", this.props.name);
//   }
// }
class HelloMessage extends React.Component {
  render() {
    // return React.createElement("div", null, "Hello ", this.props.name);
    return <div>Hello,{this.props.name}</div>
  }
}

export default HelloMessage;