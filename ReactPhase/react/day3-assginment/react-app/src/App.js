import React from "react";

class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mike",
    };
    console.log("Parent Constructor Mounted");
  }

  componentDidMount() {
    console.log("Child component did Mount");
  }

  componentDidUpdate() {
    console.log("Parent Did Update");
  }

  componentWillUnmount() {
    console.log("Parent will UnMount");
  }

  change = () => {
    this.setState({ name: "Danial" });
  };

  render() {
    return (
      <>
        <button onClick={this.change}>ativate parent</button>
        <h2>Here is Parent component content</h2>
        <h4>{this.state.name}</h4>
        {this.props.showChil ? (
          <>
            <h2>Here is Child component content</h2>
            <ChildFn />
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jack",
    };
    console.log("Child Constructor Mounted");
  }

  componentDidMount() {
    console.log("Child component did Mount");
  }

  componentDidUpdate() {
    console.log("Child Did Update");
  }

  componentWillUnmount() {
    console.log("Child will UnMount");
  }

  change = () => {
    this.setState({ name: "John" });
  };

  render() {
    return (
      <>
        <button onClick={this.change}>ativate child</button>
        <h4>{this.state.name}</h4>
      </>
    );
  }
}

const ChildFn = () => {
  const [name, setName] = React.useState("Papi");

  React.useEffect(() => {
    // setName("Anne"); 
    console.log("Child Fn Update");

    return () => {
      console.log("Child Fn Will Unmount");
    };
  }, [name]);

  return (
    <>
      <button onClick={()=>{setName("Anne")}}>ativate child</button>
      <h4>{name}</h4>
    </>
  );
};

class App extends React.Component {
  state = {
    showPar: false,
    showChil: false,
  };

  render() {
    return (
      <>
        <button onClick={() => this.setState({ showPar: !this.state.showPar })}>
          {this.state.showPar ? "Show" : "Hide"} Parent
        </button>
        <button
          onClick={() => this.setState({ showChil: !this.state.showChil })}
        >
          {this.state.showChil ? "Show" : "Hide"} Child
        </button>
        {this.state.showPar ? (
          <>
            <h1>Hello My firend</h1>
            <ParentClass showChil={this.state.showChil} />
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default App;
