import React from 'react';
import './index.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log('Counter-constructor');
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log('Counter-componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('Counter-ShouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('Counter-componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Counter-componentWillUnmount');
  }

  handleAdd = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleShowCounter = () => {
    setTimeout(() => {
      alert(this.state.counter);
    }, 3000);
  };

  render() {
    console.log('Counter-render');
    return (
      <>
        <h1>Counter:{this.state.counter}</h1>
        <button onClick={this.handleAdd}> + 1</button>
        <button onClick={this.handleShowCounter}>Show Counter After 3s</button>
      </>
    );
  }
}

class SiblingComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('Sibling-constructor');
  }

  componentDidMount() {
    console.log('Sibling-componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('Sibling-ShouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('Sibling-componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Sibling-componentWillUnmount');
  }

  render() {
    console.log('Sibling-render');
    return <h2>SiblingComponent</h2>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App-constructor');
    this.state = {
      showApp: true,
    };
  }

  componentDidMount() {
    console.log('App-componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('App-ShouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App-componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('App-componentWillUnmount');
  }

  render() {
    console.log('App-render');
    return (
      <>
        <h1>App</h1>
        <button onClick={() => { this.setState({ showApp: !this.state.showApp }); }}>Toggle Counter</button>
        <SiblingComponent></SiblingComponent>
        {this.state.showApp ? <Counter /> : null}
      </>
    );
  }
}

export default App;