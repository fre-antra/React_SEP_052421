import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'patrick',
//     };
//     // let h1 = document.querySelector('h1');
//     // console.log(h1);
//     this.handlerClick = this.handlerClick.bind(this);
//   }

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

class SubApp extends React.Component {
  constructor(...args) {
    super(...args);
    console.log("SubApp-contructor");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.age !== this.props.age) {
      console.log("SubApp-shouldComponentUpdate");
      return true;
    } else {
      return false;
    }
    // console.log('props', nextProps === this.props);
    // console.log('state', nextState === this.state);
    // console.log("SubApp-shouldComponentUpdate");

    // return true;
  }

  componentDidMount() {
    console.log("SubApp-didMount");
  }
  componentDidUpdate() {
    console.log("SubApp-didUpdate");
  }
  componentWillUnmount() {
    console.log("SubApp-WillUnmount");
  }
  render() {
    console.log("SubApp-render");
    return (
      <>
        <h1 id="mySubApp"> MySubApp </h1>
        <h2> Age:{this.props.age} </h2>
      </>
    );
  }
}

class App extends React.Component {
  constructor(...args) {
    super(...args);
    console.log("App-contructor");
    this.state = {
      name: "patrick",
      age: 18,
    };
  }

  data = {
    name: "patrick",
  };
  shouldComponentUpdate() {
    console.log("App-shouldComponentUpdate");
    return true;
  }

  handlerClick = () => {
    this.setState({
      name: "Sam",
    });
  };
  handlerClickAge = () => {
    this.setState({
      age: 19,
    });
  };
  handlerClickData = () => {
    this.data = {
      ...this.data,
      name: "Changed",
    };
  };
  componentDidMount() {
    console.log("myApp", document.querySelector("#myapp"));
    console.log("App-didMount");
  }
  componentDidUpdate() {
    console.log("App-didUpdate");
  }
  componentWillUnmount() {
    console.log("App-WillUnmount");
  }
  render() {
    // let a = null;
    // let b = null;
    // console.log(a === b);
    console.log("App-render");
    return (
      <>
        <h1 id="myapp"> MyApp</h1>
        <h3>Hello {this.state.name}</h3>
        <h3>Hello {this.data.name}</h3>
        <button onClick={this.handlerClick}>Change Name</button>
        <button onClick={this.handlerClickAge}>Change Age</button>

        <button onClick={this.handlerClickData}>Change Name Data</button>
        <SubApp age={this.state.age}></SubApp>
      </>
    );
  }
}

export default App;

// let state = {
//   name: 'patrick',
// };

// // mutable
// state.name = 'sam';

// // imutable
// let oldState = state;
// state = {
//   ...state,
//   name: 'sam',
// };
