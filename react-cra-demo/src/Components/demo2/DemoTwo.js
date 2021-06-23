import React, { Component } from 'react';
import SiblingComponent from './Sub';

class DemoTwo extends Component {
  constructor() {
    super();
    this.state = {
      showApp: true,
      counter: 5,
      age: 18,
    };
    console.log('d2-parent constructor');
  }

  componentDidMount() {
    console.log('d2-parent componentDidMount');
  }
  componentDidUpdate() {
    console.log('d2-parent componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('d2-parent componentWillUnmount');
  }

  addCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  addAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    console.log('d2-parent render');
    return (
      <div>
        {this.state.showApp ? (
          <SiblingComponent counter={this.state.counter} age={this.state.age} />
        ) : null}
        <button
          onClick={() => {
            this.setState({ showApp: !this.state.showApp });
          }}
        >
          Taggle App
        </button>
        <button onClick={this.addCounter}>Add counter</button>
        <button onClick={this.addAge}>Add age</button>
        <hr />
      </div>
    );
  }
}

export default DemoTwo;
