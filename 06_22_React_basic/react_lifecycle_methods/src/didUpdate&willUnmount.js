import React from 'react';
import './App.css';

class SubApp extends React.Component {
  constructor(props) {
    super(props);
    console.log('SubApp-contructor');
  }

  componentDidMount() {
    console.log('SubApp-didMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*
    console.log('props', nextProps === this.props); // props will always be a new object, even if it doesn't exist
    console.log('state', nextState === this.state); // if state doesn't exist, it's null
    */
    if (nextProps.age !== this.props.age) {
      console.log('SubApp-shouldComponentUpdate', true);
      return true;
    } else {
      console.log('SubApp-shouldComponentUpdate', false);
      return false;
    }
  }

  componentDidUpdate() {
    console.log('SubApp-didUpdate');
  }

  componentWillUnmount() {
    console.log('SubApp-willUnmount');
  }

  render() {
    console.log('SubApp-render');
    return (
      <>
        <h1 id="mySubApp"> MySubApp </h1>
        <h2> Age:{this.props.age} </h2>
      </>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App-contructor');
    this.state = {
      name: 'A',
      age: 18,
    };
  }

  data = {
    name: 'B',
  };

  shouldComponentUpdate() {
    console.log('App-shouldComponentUpdate');
    return true;
  }

  handlerClick = () => {
    this.setState({
      name: 'C',
    });
  };

  handlerClickAge = () => {
    this.setState({
      age: 19,
    });
  };

  handlerClickData = () => {
    this.data = {
      ...this.data,
      name: 'Changed',
    };
  };

  componentDidMount() {
    console.log('App-didMount');
  }

  componentDidUpdate() {
    console.log('App-didUpdate');
  }

  componentWillUnmount() {
    console.log('App-willUnmount');
  }

  render() {
    console.log('App-render');
    return (
      <>
        <h1 id="myapp"> MyApp</h1>
        <h3>Hello {this.state.name}</h3>
        <h3>Hello {this.data.name}</h3>
        <button onClick={this.handlerClick}>Change Name</button>
        <button onClick={this.handlerClickAge}>Change Age</button>
        <button onClick={this.handlerClickData}>Change Name Data</button>
        <SubApp age={this.state.age} />
      </>
    );
  }
}

export default App;

