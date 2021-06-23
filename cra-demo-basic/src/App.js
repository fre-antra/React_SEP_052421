import React from "react";
import "./App.css";
import AppCounter from "./AppCounter";
import AppFn from "./AppFn";

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      name: "Sankeerth",
      showComponent: true,
    };
  }

  componentDidMount() {
    console.log("ClassComponent-ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("ClassComponent-ComponentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("ClassComponent-ShouldComponentUpdate");
    return true;
  }

  componentWillUnmount() {
    console.log("ClassComponent-ComponentWillUnmount");
  }

  handleNameChange = () => {
    if (this.state.name === "Sankeerth") {
      this.setState({
        name: "Reddy",
      });
    } else {
      this.setState({
        name: "Sankeerth",
      });
    }
  };

  handleToggleView = () => {
    this.setState({
      ...this.state,
      showComponent: !this.state.showComponent,
    });
    console.log(this.state.showComponent);
  };

  render() {
    return (
      <div className="App">
        {console.log("Class - render")}
        <p>Name: {this.state.name}</p>
        <button onClick={this.handleNameChange} style={{ margin: "30px" }}>
          Change Name
        </button>
        {this.state.showComponent && <AppFn name={this.state.name} />}
        <button onClick={this.handleToggleView} style={{ margin: "30px" }}>
          Toggle Component
        </button>
        <AppCounter />
      </div>
    );
  }
}

export default App;
