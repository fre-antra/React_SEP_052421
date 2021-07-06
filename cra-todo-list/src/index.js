import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import { actionCreater, myStore, store } from "./redux/redux";
import { Provider, connect, useDispatch, useSelector } from "react-redux";
// import {
//   MyProvider,
//   myConnect,
//   //   useSelector,
//   //   useDispatch,
// } from "./ReactRedux/ReactRedux";

import WithTodosData from "./Components/WithTodosData/WithTodosData";

function Title(props) {
  return <h1>{props.title}</h1>;
}

function Title2(props) {
  return <h4>{props.title}</h4>;
}

// class Counter extends React.Component {
//   handleAddCounter() {
//     myStore.dispatch({ type: "counter/incremented" });
//   }

//   handleSubCounter() {
//     myStore.dispatch({ type: "counter/decremented" });
//   }

//   componentDidMount() {
//     myStore.subscribe(() => this.forceUpdate());
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter</h1>
//         <p>Counter value: {myStore.getState().value}</p>
//         <button onClick={this.handleAddCounter}>ADD</button>
//         <button onClick={this.handleSubCounter}>SUB</button>
//       </div>
//     );
//   }
// }

// const useForceUpdate = () => {
//   const [update, setUpdate] = React.useState(0);
//   return () => setUpdate(update + 1);
// };

// const FCounter = () => {
//   const forceUpdate = useForceUpdate();
//   const handleAddCounter = () => {
//     myStore.dispatch({ type: "counter/incremented" });
//     forceUpdate();
//   };

//   const handleSubCounter = () => {
//     myStore.dispatch({ type: "counter/decremented" });
//     forceUpdate();
//   };

//   return (
//     <div>
//       <h1>Counter</h1>
//       <p>Counter value: {myStore.getState().value}</p>
//       <button onClick={handleAddCounter}>ADD</button>
//       <button onClick={handleSubCounter}>SUB</button>
//     </div>
//   );
// };

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
  //console.log(state);
  return { counter: state.value };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: () => dispatch(actionCreater.counterAdd()),
    handleSub: () => dispatch(actionCreater.counterSub()),
  };
}

//const MyCounter = myConnect(mapStateToProps, mapDispatchToProps)(Counter);
const MyCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const CounterComponent = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      Hooks Counter : {counter}
      <button onClick={() => dispatch(actionCreater.counterAdd())}>Add</button>
      <button onClick={() => dispatch(actionCreater.counterSub())}>Sub</button>
    </div>
  );
};

const MyReactReduxTest = () => {
  return (
    <Provider store={store}>
      <MyCounter name="sankeerth"></MyCounter>
      <CounterComponent></CounterComponent>
    </Provider>
  );
};

ReactDOM.render(<MyReactReduxTest />, document.getElementById("root"));
