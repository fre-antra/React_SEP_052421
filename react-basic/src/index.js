import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

// let counterRef = 0;
// const FcCounter = () => {
//   const [counter, setCounter] = React.useState(0);
//   counterRef = counter;

//   const handleShowCounter = () => {
//     setTimeout(() => {
//       alert(counterRef);
//     }, 3000);
//   };
//   return (
//     <>
//       <h1>Counter:{counter}</h1>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         +
//       </button>
//       <button onClick={handleShowCounter}>Show Counter After 3s</button>
//     </>
//   );
// };

// const FnComponnet = () => {
//   const [num, setNum] = React.useState(0);
//   const firstCalRef = React.useRef(true);
//   //const [firstCall, setFirstCall] = React.useState(true); // flag
//   React.useEffect(() => {
//     console.log("didMount");
//   }, []);

//   React.useEffect(() => {
//     if (firstCalRef.current !== true) {
//       console.log("didUpdate");
//     } else {
//       firstCalRef.current = false;
//     }
//     return () => {
//       console.log("WillUnmount");
//     };
//   }, [num]);

//   return <h1 onClick={() => setNum(num + 1)}>FC ,ClickTimes: {num}</h1>;
// };

let test;
class Counter extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      counter: 0,
    };
    test = this;
  }
  handleAdd = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
  };
  handleShowCounter = () => {
    console.log(this === test); // true
    setTimeout(() => {
      alert(this.state.counter); // behave different from functional component
    }, 3000);
  };

  render() {
    console.log(this === test); // true

    return (
      <>
        <h1>Counter:{this.state.counter}</h1>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleShowCounter}>Show Counter After 3s</button>
      </>
    );
  }
}

class SiblingComponent extends React.Component {
  constructor(...args) {
    super(...args);
    console.log("Sibling-constructor");
  }
  shouldComponentUpdate() {
    console.log("Sibling-ShouldComponentUpdate");
    return true;
  }
  componentDidMount() {
    console.log("Sibling-componentDidMount");
  }
  componentDidUpdate() {
    console.log("Sibling-componentDidUpdate");
  }
  render() {
    return <h1>SiblingComponent</h1>;
  }
}

class MyApp extends React.Component {
  state = {
    showApp: true,
  };
  render() {
    return (
      <>
        {this.state.showApp ? <Counter /> : null}
        <SiblingComponent></SiblingComponent>
        <button
          onClick={() => {
            this.setState({ showApp: !this.state.showApp });
          }}
        >
          Toggle App
        </button>
      </>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
// ReactDOM.render(<FcCounter />, document.getElementById("root"));
// ReactDOM.render(<FnComponnet />, document.getElementById("root"));
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
