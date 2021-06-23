import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppFn from './AppFn'
import AppClass from './AppClass.js'
let test;
class Counter extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      counter: 0,
      counter2: 1,
    };
    console.log('counterConstructor')
    test = this;
  }
  handleAdd = () => {
    console.log("test1");
    // this.setState({ counter: this.state.counter2 + 1 });

    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log("firstCall", this.state.counter);
    });
    this.setState({ counter2: this.state.counter2 + 1 }, () => {
      console.log("firstCallCounter2", this.state.counter2);
    });
    console.log("test2");
    // setTimeout(()=>{
    //   this.setState({counter: this.state.counter+1}, ()=>{
    //     console.log('setTimeoutCall', this.state.counter)
    //   })
    // }, 0)
    this.setState(
      //what is state in here? this.state didn't change!!!!!
      (state) => console.log("state1", state, this.state),
      () => {
        console.log("updater0", this.state.counter);
      }
    );
    //{counter: 1} {counter: 0}
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log("secondCall", this.state.counter);
    });
    // this.setState({ counter: this.state.counter2 + 1 });
    this.setState(
      (state) => console.log("state2", state, this.state),
      () => {
        console.log("updater1", this.state.counter);
      }
    );
    this.setState(
      (state) => ({ counter: state.counter + 1 }),
      () => {
        console.log("updater2", this.state.counter);
      }
    );
    this.setState(
      (state) => console.log("state3", state, this.state),
      () => {
        console.log("updater3", this.state.counter);
      }
    );
    console.log("test3");
    //setState is asynchronous.
    //stack call: test1=>test2=>test3=>
    //            stage1 state:{counter: 1} this.state{counter:0} =>
    //            stage2 state:{counter: 1} this.state{counter:0} =>
    //            stage3 state:{counter: 2} this.state{counter:0} =>
    //-------- here this.state never change in the setState process until finish-------
    //---------state is a reference to the component state at the time the change is being applied.------
    //            render, this.state.counter:3 =>
    //            ...setState callback

    //The setState() method does not immediately update the state of the component. asynchronous.
    // React batch multiple update requests together to make rendering

    //The second parameter to setState() is an optional callback function
    // that will be executed once setState is completed and the component is re-rendered.
    // Generally we recommend using componentDidUpdate() for such logic instead.
  };
  componentDidUpdate(preProps, preState){
    console.log("counterdidupdate:", preProps, preState, this.state.counter);
  }
  handleShowCounter = () => {
    console.log(this === test);
    setTimeout(() => {
      alert(this.state.counter);
    }, 3000);
  };

  render() {
    // console.log(this === test);
    console.log("render, this.state.counter:", this.state);
    return (
      <>
        <h1>Counter:{this.state.counter}</h1>
        {/* <h1>Counter2:{this.state.counter2}</h1> */}
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleShowCounter}>Show Counter After 3s</button>
      </>
    );
  }
}

let counterRef = 0;
const FcCounter = () => {
  const [counter, setCounter] = React.useState(0);
  counterRef = counter;

  const handleShowCounter = () => {
    setTimeout(() => {
      alert(counterRef);
    }, 3000);
  };
  return (
    <>
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button onClick={handleShowCounter}>Show Counter After 3s</button>
    </>
  );
};

//let firstCall = true;
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
          Taggle App
        </button>

        {/* <AppFn />
        <AppClass /> */}
      </>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
// ReactDOM.render(<AppFn />, document.getElementById("root"));
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
