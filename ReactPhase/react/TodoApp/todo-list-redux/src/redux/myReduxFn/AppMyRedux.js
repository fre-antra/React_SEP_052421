import React from "react";
import { actionCreator, myStore, selfStore } from "./myRedux";
import { MyConnect, useSelector, useDispatch } from "./myReactRedux";
// import { useDispatch } from "react-redux";


/* ------------- component with my useSelector && my useDispatch ------------- */

export const CounterComponent = () => {
  const counterValue = useSelector(state => state.value);
  const dispatch = useDispatch()

  return (
    <>
      <h1>FC - Counter - My React Redux selector and dispatch with aciton creator</h1>
      <h2>My name is Tonny</h2>
      <h2>Counter:{counterValue}</h2>
      <button onClick={()=>dispatch(actionCreator.counterAdd())}>Add</button>
      <button onClick={()=>dispatch(actionCreator.counterSub())}>Sub</button>
    </>
  )
}



/* ------------- connect component  ------------ */
const CounterMyReduxApp = ({ handleAdd, handleSub, name }) => {
    
    // console.log('counter my redux app',props);
  return (
    <div>
      {console.log("Inside render", selfStore.getState().value)}
      <h1>FC - Counter - My Redux and My React Redux</h1>
      <h2>My name is { name }</h2>
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

// const ExportConnect = MyConnect(mapStateToProps,mapDispatchToProps)(CounterMyReduxApp)

export default MyConnect(mapStateToProps,mapDispatchToProps)(CounterMyReduxApp)