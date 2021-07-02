import React from "react";
import ReactDOM from "react-dom";
import { myStore, selfStore } from "./redux/myRedux/myRedux";
import { useState, useEffect } from "react";
import { MyConnect } from "./myReactRedux";

const CounterMyReduxApp = ({ handleAdd, handleSub, counter, name }) => {
//   const handleAdd = () => {};

//   const handleSub = () => {};
  return (
    <div>
      {console.log("Inside render", selfStore.getState().value)}
      <h1>FC - Counter - My Redux and My React Redux</h1>
      <h2>Counter:{selfStore.getState().value}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </div>
  );
};

// mapStateToProps(obj): Wrapper component will subscribe the Redux store Update. each state change will call this function
//                      return obj will be merged as prop to connected component
const mapStateToProps = (state) => {
  console.log("From mapStateToProps: ");
  return { counter: state.value };
};

// mapDispatchToProps(obj/fn):  if fn, it is the dispatch for store states.
const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: () => dispatch({ type: "counter/incremented" }),
    handleSub: () => dispatch({ type: "counter/decremented" }),
  };
};


export default MyConnect(mapStateToProps,mapDispatchToProps)(CounterMyReduxApp)