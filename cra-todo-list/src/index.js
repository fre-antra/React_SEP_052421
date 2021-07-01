import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import { myStore } from "./redux/redux";

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

const useForceUpdate = () => {
  const [update, setUpdate] = React.useState(0);
  return () => setUpdate(update + 1);
};

const FCounter = () => {
  const forceUpdate = useForceUpdate();
  const handleAddCounter = () => {
    myStore.dispatch({ type: "counter/incremented" });
    forceUpdate();
  };

  const handleSubCounter = () => {
    myStore.dispatch({ type: "counter/decremented" });
    forceUpdate();
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Counter value: {myStore.getState().value}</p>
      <button onClick={handleAddCounter}>ADD</button>
      <button onClick={handleSubCounter}>SUB</button>
    </div>
  );
};

ReactDOM.render(<FCounter />, document.getElementById("root"));
