import React, { Fragment, useState } from 'react';
import './App.css';
import { myStore } from './redux/Redux';

class App extends React.Component {

  handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
    console.log(myStore.getState());
  };

  handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
    console.log(myStore.getState());
  };

  componentDidMount() {
    myStore.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <Fragment>
        <h1>Counter:{myStore.getState().value}</h1>
        <button onClick={this.handleAdd}> + 1</button>
        <button onClick={this.handleSub}> - 1 </button>
      </Fragment>
    );
  }
}

// Functional Component with self_defined hook

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return [value, () => setValue(value => value + 1)]; // update the state to force render
}

function FuncApp() {
  const [counter, forceUpdate] = useForceUpdate();

  React.useEffect(() => {
    myStore.subscribe(() => {
      forceUpdate();
      console.log(counter, 'render');
    });
  }, []);

  const handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
    console.log(myStore.getState());
  };
  const handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
    console.log(myStore.getState());
  };

  return (
    <Fragment>
      <h1>Func Counter:{myStore.getState().value}</h1>
      <button onClick={handleAdd}> + 1 </button>
      <button onClick={handleSub}> - 1 </button>
    </Fragment>
  );

}

export default FuncApp;
