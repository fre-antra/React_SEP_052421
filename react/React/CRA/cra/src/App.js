import react from "react";
import { useEffect } from "react/cjs/react.production.min";
import "./App.css";

function App() {
  const [num, state] = react.useState(0);
  // pass 0 as initial state for our variable

  /*
  It declares a “state variable”. Our variable is 
  called count but we could call it anything else, 
  like banana. This is a way to “preserve” some values
   between the function calls — useState is a new way 
   to use the exact same capabilities that this.state 
   provides in a class. 
  */

  react.useEffect(() => {
    console.log("fnc-didmount");
  }, []);

  react.useEffect(() => {
    console.log(num, "fnc-update");
    return () => {
      // UNMOUNTED before every update
      // for previous effect!!!! not this call

      //state(0);
      console.log(num, "fnc-unmount");
    };
  }, [num]); // Only re-run the effect if num changes

  console.log(num, "fnc-render");
  return (
    <button className="App" onClick={() => state(num + 1)}>
      {num}
    </button>
  );
}
/*
...
1 fnc-render 
0 fnc-unmount 
1 fnc-update 
...


...
state(num + 1):
1 fnc-render 
0 nc-unmount 
1 fnc-update 

state(0):
0 fnc-render 
1 fnc-unmount 
0 fnc-update 

state(0)->state(0):
0 fnc-render 
...
*/

class Clock extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
      counter: 0,
    };

    this.elapsedmin = 0;
  }

  tick() {
    // setState() changes state and trigger render()!

    //  use componentDidUpdate or a setState callback
    // (setState(updater, callback)), either of which
    // are guaranteed to fire after the update
    // has been applied.

    // setState() will always lead to a re-render
    // unless shouldComponentUpdate() returns false

    /*
    React may batch multiple setState() calls 
    into a single update for performance.

    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
    
    That function will receive the previous state as the 
    first argument, and the props at the time the 
    update is applied as the second argument:
    */

    this.setState({
      date: new Date(),
    });

    // it can update state prop indipendently
    this.setState((state, props) => ({
      counter: state.counter + 1,
    }));

    /*
    always call state locally
    because Neither parent nor child components 
    can know if a certain component 
    is stateful or stateless
    */
  }

  componentDidMount() {
    console.log("clock-mount");
    //The componentDidMount() method runs after
    //the component output has been mounted to the DOM.
    // like where to initialization

    // load data
    // net work request
    // ...

    //This is a good place to set up a timer:

    this.timerID = setInterval(() => this.tick(), 1000);
    // It executes a specified function multiple times
    // at set time intervals specified in milliseconds
    // The setInterval() returns a variable called an
    // interval ID. You can then use it to call the
    // clearInterval() function
  }

  componentDidUpdate() {
    console.log("clock-Update");
    /*
    componentDidMount()
    vs.
    componentDidUpdate(prevProps, prevState, snapshot)

    componentDidUpdate()is called after componentDidMount() 
    and setState()

    useful to perform some action when the state changes
    
    This method is not called for the initial render!!!!
    
    DOM stuff
    Network requests
    ...

    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }


    caution!!!!!!!!!
    setState() canbe called here
    but it trigger didupdate() again!!!!

    so put it in conditions to prevent infinite loop.




    tips!!!!!!!!!!!
    If your component implements the getSnapshotBeforeUpdate() 
    lifecycle (which is rare), the value it returns will 
    be passed as a third “snapshot” parameter to 
    componentDidUpdate(). Otherwise this parameter 
    will be undefined.
    */
    this.elapsedmin = Math.floor(this.state.counter / 60);
  }

  componentWillUnmount() {
    console.log("clock-Unmount");
    // distroy event
    clearInterval(this.timerID);
  }

  render() {
    console.log("clock-render");
    return (
      <div>
        <h1> It is {this.state.date.toLocaleTimeString()}.</h1>
        <h1> It runs {this.state.counter} times.</h1>
        <h1> Elapsed {this.elapsedmin} minutes.</h1>
      </div>
    );
  }
}

class Appc extends react.Component {
  constructor(prop) {
    super(prop);
    this.state = { date: new Date(), name: "111", ID: 1 };
  }

  componentDidMount() {
    console.log("appc-mount");
  }

  handleclick = () => {};

  render() {
    console.log("appc-render");
    return (
      <div className="App">
        {this.state.name}
        <h1>create date: {this.state.date.toLocaleTimeString()}</h1>
        <Clock date={this.state.date} />
        <App />
      </div>
    );

    /* 
    top-down Any state is always owned by some specific 
    component, and any data or UI derived from that 
    state can only affect components “below” them in the tree 
    */
  }
}

const FcCounter = () => {
  const [c, sc] = react.useState(0);

  const hfsc = () => {
    setTimeout(() => {
      alert(c);
      // 0
      // because every time [c,sc] is different vars created by
      // useState, and only copy the value from previous one.
      // however, there c is reference to the previous vars
      // instead of current one which hold the value.
      // thus it cause unupdate from closure
    }, 3000);
  };

  return (
    <>
      <h1>c:{c}</h1>
      <button onClick={() => sc(c + 1)}>+</button>
      <button onClick={() => hfsc()}>show</button>
    </>
  );
};

function AsyncFnc() {
  const [c, sc] = react.useState(0);

  react.useEffect(() => {
    const id = setInterval(() => {
      console.log(c);
      sc(c + 1);
    }, 1000);
    console.log("m");

    return () => {
      console.log("um");
      clearInterval(id);
    };
  }, [c]);

  return <div>{c}</div>;
}

class AsyncC extends react.Component {
  constructor(prop) {
    super(prop);
    this.state = { date: new Date(), name: "111", ID: 1 };
  }

  componentDidMount() {}

  componentDidUpdate() {
    console.log("async-update");
    // puts the update in a queue to be processed later.
    // batch them update once
    /*
    use callback
    this.setState({count:42}, () => {
      console.log(this.state.count)
      //outputs 42
    })
    */
  }

  handleclick = () => {
    console.log(this.state.ID); //1 3 5
    this.setState({ ID: ++this.state.ID });
    console.log(this.state.ID); //2 4 6
    this.setState({ ID: ++this.state.ID });
    console.log(this.state.ID); //3 5 7
  };

  render() {
    return (
      <div className="App">
        {this.state.ID}
        <button onClick={this.handleclick}>async</button>
      </div>
    );
  }
}

export { Appc, App, FcCounter, AsyncFnc, AsyncC };
