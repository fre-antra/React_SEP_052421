import React, { Component } from 'react';

class DemoOne extends Component {
  state = {
    counter: 0,
  };

  data = {
    counter: 10,
  };

  handleChangeState = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleChangeData = () => {
    console.log('working', this.data);
    this.data = {
      ...this.data,
      counter: this.data.counter + 1,
    };
  };

  render() {
    console.log('d1 render.');
    return (
      <div>
        <h3>Demo one</h3>
        <p>{this.state.counter}</p>
        <p>{this.data.counter}</p>
        <button onClick={this.handleChangeState}>State add one</button>
        <button onClick={this.handleChangeData}>Data add one</button>
        <hr />
      </div>
    );
  }
}

export default DemoOne;
