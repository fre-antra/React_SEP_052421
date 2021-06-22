import React, { Fragment } from 'react';
import AppFc from './AppFc';

class App extends React.Component {
  state = {
    name: 'patrick',
  };

  handlerClick = () => {
    this.setState({
      name: 'Sam',
    });
  };

  componentDidMount() {
    console.log('didMount');
  }

  componentDidUpdate() {
    console.log('didUpdate');
  }

  componentWillUnmount() {
    console.log('WillUnmount');
  }

  render() {
    return (
      <Fragment>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.handlerClick}>Change Name</button>
        <br />
        <AppFc />
      </Fragment>
    );
  }
}

export default App;
