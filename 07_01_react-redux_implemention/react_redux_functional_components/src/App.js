import React, { Fragment } from 'react';
import './App.css';
import { myConnect } from './react-redux/react-redux';

const App = ({ handleAdd, handleSub, counter, name }) => {
  return (
    <Fragment>
      <h1>Counter: {counter}</h1>
      <h2>Name: {name}</h2>
      <button onClick={() => handleAdd()}> + 1</button>
      <button onClick={() => handleSub()}> - 1 </button>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { counter: state.value };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: () => dispatch({ type: 'counter/incremented' }), // handleAdd is a function, so we should assign a function as its value
    handleSub: () => dispatch({ type: 'counter/decremented' })
  };
};

export default myConnect(mapStateToProps, mapDispatchToProps)(App);



