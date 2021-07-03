import React, { Fragment } from 'react';
import './App.css';
import { actionCreator } from './redux/Redux';
import { useSelector, useDispatch } from './react-redux/react-redux';

const App = ({ name }) => {
  const counterValue = useSelector(state => state.value);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h1>Counter: {counterValue}</h1>
      <h2>Name: {name}</h2>
      <button onClick={() => dispatch(actionCreator.handleAdd())}> + 1</button>
      <button onClick={() => dispatch(actionCreator.handleSub())}> - 1 </button>
    </Fragment>
  );
};

export default App;



