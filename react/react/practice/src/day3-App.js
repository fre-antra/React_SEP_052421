import React from "react";
import { unmountComponentAtNode } from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "patrick",
      isMounted: true,
    };
    // let h1 = document.querySelector('h1');
    console.log("constructor");
    this.handlerClick = this.handlerClick.bind(this);
  }

  //   handlerClick() {
  //     console.log(this);
  //     this.setState({
  //       name: 'Sam',
  //     });
  //   }

  //   render() {
  //     return (
  //       <>
  //         <h1>Hello {this.state.name}</h1>
  //         <button onClick={this.handlerClick}>Change Name</button>
  //       </>
  //     );
  //   }
  // }

  // export default App;

  // class App extends React.Component {
  //   state = {
  //     name: "patrick",
  //   };

  handlerClick = () => {
    this.setState({
      name: "Sam",
    });
  };
  handleIsMounted = () => {
    //takes an argument as a container from which the specific component should be removed.
    unmountComponentAtNode(document.getElementById("root"));
  };

  // UNSAFE_componentWillMount() {
  //   //immediately before initial rendering
  //   console.log("willMount");
  // }
  componentDidMount() {
    //immediately after initial rendering
    console.log("didMount");
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   //when component receives new props
  //   console.log("willReceiveProps", nextProps);
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   //before rendering, after receiving new props or state
  //   //if return true, it means component will update, or not with false return.
  //   console.log("shouldComponentUpdate", nextProps, nextState);
  //   // return false;
  //   return true;
  // }
  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   //before rendering, after receiving new props or state(as well as shouldComponentUpdate)
  //   console.log("willUpdate", nextProps, nextState);
  // }
  componentDidUpdate(prevProps, prevState) {
    //after component's updates or re-render are flushed to DOM(api call)
    console.log("didUpdate", prevProps, prevState);
  }
  componentWillUnmount() {
    //immediately before removing component from DOM.
    console.log("WillUnmount");
  }
  render() {
    return (
      <>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.handlerClick}>Change Name</button>
        <button onClick={this.handleIsMounted.bind(this)}>unmount it</button>
      </>
    );
  }
}

export default App;
