import React, { Component } from "react";

export default class AppCounter extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      count: 0,
    };
  }

  handleCountChange1 = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      this.setState({ count: this.state.count + 1 });
    });
  };

  handleCountChange2 = () => {
    this.setState((prevSate) => ({
      count: prevSate.count + 1,
    }));
    this.setState((prevSate) => ({
      count: prevSate.count + 1,
    }));
    this.setState((prevSate) => ({
      count: prevSate.count + 1,
    }));
    this.setState((prevSate) => ({
      count: prevSate.count + 1,
    }));
  };

  handleDelayedCount = () => {
    setTimeout(() => {
      alert(this.state.count);
    }, 3000);
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Counter Component</h3>
        <p>Counter Value : {this.state.count}</p>
        <button onClick={this.handleCountChange1}>
          Increment Count (Callback) +2
        </button>
        <button onClick={this.handleCountChange2}>
          Increment Count (passing a function) +4
        </button>
        <button onClick={this.handleDelayedCount}>
          Show count after delay
        </button>
        <button onClick={() => this.setState({ count: 0 })}>
          Reset Counter
        </button>
      </div>
    );
  }
}
