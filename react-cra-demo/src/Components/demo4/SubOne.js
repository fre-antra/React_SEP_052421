import React, { Component } from 'react';

class SubOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleAdd = () => {
    this.setState({ counter: this.state.counter + 1 });
    // this.setState({ counter: this.state.counter + 1 });
  };

  handleShowCounter = () => {
    setTimeout(() => {
      alert(this.state.counter);
    }, 3000);
  };

  render() {
    return (
      <div>
        <p>SubOne Counter:{this.state.counter}</p>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleShowCounter}>Show Counter After 3s</button>
      </div>
    );
  }
}

export default SubOne;
