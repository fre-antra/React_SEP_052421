import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

const FnComponnet = () => {
  const [num, setNum] = React.useState(0);
  const firstCalRef = React.useRef(true);
  //const [firstCall, setFirstCall] = React.useState(true); // flag
  React.useEffect(() => {
    console.log("didMount");
  }, []);

  React.useEffect(() => {
    if (firstCalRef.current !== true) {
      console.log("didUpdate");
    } else {
      firstCalRef.current = false;
    }
    return () => {
      console.log("WillUnmount");
    };
  }, [num]);

  return <h1 onClick={() => setNum(num + 1)}>FC ,ClickTimes: {num}</h1>;
};

ReactDOM.render(<FnComponnet />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));
//ReactDDOM.render(React.createElement(), document.getElementById('root'));

// foo(foo2());

// function foo(input) {
//   console.log('foo');
//   console.log(input);
// }

// function foo2() {
//   console.log('foo2');
// }

// const arr = [1, 2, 3];
// // declaritive programing:
// arr.forEach((item) => {
//   console.log(item);
// });
// // imperative
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
