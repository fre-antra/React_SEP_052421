import React, { Component } from 'react';

class SiblingComponent extends Component {
  constructor(...args) {
    super(...args);
    console.log('d2-child constructor');
  }

  componentDidMount() {
    console.log('d2-child componentDidMount');
  }
  componentDidUpdate() {
    console.log('d2-child componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('d2-child componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.counter !== this.props.counter) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log('d2-child render');
    return (
      <div>
        <h3>Demo Two</h3>
        <p>Props counter: {this.props.counter}</p>
        <p>Props age: {this.props.age}</p>
      </div>
    );
  }
}

export default SiblingComponent;
