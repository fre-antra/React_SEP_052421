import React from "react";
import './App.css';
import PropTypes from "prop-types";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        name: 'Anne',
    };
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick = () => {
    this.setState({
      name: "Smith",
    });
  };

  componentDidMount() {
    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
    console.log("Component did Mount");
  }  

  componentDidUpdate(prevProps, prevState, snapshot) {
    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    if (prevProps.name !== this.state.name) {
      console.log('name has changed');
    }
  }

  componentDidUnMount() {
    // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
    console.log("Component did Unmount");
  }

  render() {
    return (
      <>
        <h1>Hello {this.state.name} </h1>
        <button onClick={this.handleClick}> change name</button>
      </>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: "Jacky",
};

export default App;
