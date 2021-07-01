import { Component } from 'react';
import myStore from '../Redux/redux';

export default class Counter1 extends Component {
  componentDidMount() {
    myStore.subscribe(() => this.forceUpdate());
  }

  handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
  };

  handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
  };

  render() {
    return (
      <div>
        <h1>Counter 1 -- CC</h1>
        <h2>Counter:{myStore.getState().value}</h2>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Sub</button>
        <hr />
      </div>
    );
  }
}
