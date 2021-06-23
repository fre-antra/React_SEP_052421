import React from 'react';
import './App.css';



// React.memo
class SubApp extends React.Component {
  constructor(props) {
    super(props);
    console.log('SubApp-contructor');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.age !== this.props.age) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  componentDidMount() {
    console.log('SubApp-didMount');
  }
  componentDidUpdate() {
    console.log('SubApp-didUpdate');
  }
  componentWillUnmount() {
    console.log('SubApp-WillUnmount');
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
      name: 'patrick',
      age: 18,
    };
  }

  data = {
    name: 'patrick',
  };
  shouldComponentUpdate() {
    console.log('App-shouldComponentUpdate');
    return true;
  }

  handlerClick = () => {
    this.setState({
      name: 'Sam',
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
    console.log('App-WillUnmount');
  }
  render() {
    let a = null;
    let b = null;
    console.log(a === b);
    console.log('App-render');
    return (
      <>
        <h1 id="myapp"> MyApp</h1>
        <h3>Hello {this.state.name}</h3>
        <h3>Hello {this.data.name}</h3>
        <button onClick={this.handlerClick}>Change Name</button>
        <button onClick={this.handlerClickAge}>Change Age</button>

        <button onClick={this.handlerClickData}>Change Name Data</button>
        <SubApp></SubApp>
      </>
    );
  }
}

export default App;

