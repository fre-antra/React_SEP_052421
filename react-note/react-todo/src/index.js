import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { actionCreator, myStore, store } from "./Redux/Redux";
// import { Provider, connect } from "react-redux";
import { MyProvider, myConnect, useSelector, useDispatch } from "./ReactRedux/ReactRedux";

// class Counter extends React.Component {
//   handleAdd = () => {
//     myStore.dispatch({ type: "counter/incremented" });
//     console.log(myStore.getState());
//   };
//   handleSub = () => {
//     myStore.dispatch({ type: "counter/decremented" });
//     console.log(myStore.getState());
//   };

//   componentDidMount() {
//     myStore.subscribe(() => this.forceUpdate());
//   }

//   render() {
//     return (
//       <>
//         <h1>Counter:{myStore.getState().value}</h1>
//         <button onClick={this.handleAdd}>Add</button>
//         <button onClick={this.handleSub}>Sub</button>
//       </>
//     );
//   }
// }

// const useForceUpdate = () => {
//   const [updateRef, setUpdate] = useState(0);
//   const ref = useRef(updateRef);
//   return [
//     updateRef,
//     () => {
//       ref.current = ref.current + 1;
//       setUpdate(ref.current);
//     },
//   ];
// };

// function FCCounter() {
//   const [updateRef, forceUpdate] = useForceUpdate();

//   useEffect(() => {
//     myStore.subscribe(() => forceUpdate());
//     // console.log(updateRef);
//   }, []);

//   const handleAdd = () => {
//     myStore.dispatch({ type: "counter/incremented" });
//     // console.log(updateRef);
//     console.log(myStore.getState());
//   };
//   const handleSub = () => {
//     myStore.dispatch({ type: "counter/decremented" });
//     console.log(myStore.getState());
//   };

//   return (
//     <>
//       <h1>FcCounter:{myStore.getState().value}</h1>
//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleSub}>Sub</button>
//     </>
//   );
// }

class Counter extends React.Component {
  handleAdd = () => {
    this.props.handleAdd();
  };
  handleSub = () => {
    this.props.handleSub();
  };
  render() {
    return (
      <>
        <h1>Counter:{this.props.counter}</h1>
        <h2>Name:{this.props.name}</h2>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Sub</button>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { counter: state.value };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: () => dispatch({ type: "counter/incremented" }),
    handleSub: () => dispatch({ type: "counter/decremented" }),
  };
}

// const MyCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
const MyCounter = myConnect(mapStateToProps, mapDispatchToProps)(Counter);

// console.log(store, myStore);
// const ReactReduxTest = () => {
//   return (
//     <Provider store={store}>
//       <MyCounter></MyCounter>
//       <MyCounter></MyCounter>
//     </Provider>
//   );
// };

const CounterComponent = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      Hooks Counter: {counter}
      <button onClick={() => dispatch(actionCreator.counterAdd())}>Add</button>
      <button onClick={() => dispatch(actionCreator.counterSub())}>Sub</button>
    </div>
  );
};

const MyReactReduxTest = () => {
  return (
    <MyProvider store={store}>
      <MyCounter name="patrick"></MyCounter>
      <CounterComponent></CounterComponent>
    </MyProvider>
  );
};

ReactDOM.render(<MyReactReduxTest />, document.getElementById("root"));
