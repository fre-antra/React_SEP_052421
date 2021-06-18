import React from "react";

export default class HelloMessage extends React.Component {
    render() {
        return React.createElement("div", null, "Hello", this.props.name);
    }
}
