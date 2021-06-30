import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { myStore } from "./Redux/Redux";

class Counter extends React.Component {
  handleAdd = () => {
    myStore.dispatch({ type: "counter/incremented" });
    console.log(myStore.getState());
  };
  handleSub = () => {
    myStore.dispatch({ type: "counter/decremented" });
    console.log(myStore.getState());
  };

  componentDidMount() {
    myStore.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <>
        <h1>Counter:{myStore.getState().value}</h1>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Sub</button>
      </>
    );
  }
}

// not working because of useEffect
const useForceUpdate = () => {
  const [update, setUpdate] = useState(0);
  return [update, () => setUpdate(update + 1)];
};

function FCCounter() {
  const [update, forceUpdate] = useForceUpdate();

  useEffect(() => {
    myStore.subscribe(() => forceUpdate());
    console.log(update);
  }, []);

  const handleAdd = () => {
    myStore.dispatch({ type: "counter/incremented" });
    console.log(myStore.getState());
  };
  const handleSub = () => {
    myStore.dispatch({ type: "counter/decremented" });
    console.log(myStore.getState());
  };

  return (
    <>
      <h1>FcCounter:{myStore.getState().value}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </>
  );
}

ReactDOM.render(<FCCounter />, document.getElementById("root"));
