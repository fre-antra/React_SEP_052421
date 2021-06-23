import React, { Component } from 'react'
import Header from "./header/Header";
import ToDoInput from "./toDoInput/ToDoInput";
import ToDoItems from "./todoitems/ToDoItems";
// import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoLists: [],
      input: "",
    };
    // console.log("constructor", this.state);
  }
  // componentDidMount() {
  //   console.log("App.componentDidMount");
  // }

  // shouldComponentUpdate() {
  //   console.log("App.shouldComponentUpdate");
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log("App.componentDidUpdate");
  // }

  // componentWillUnmount() {
  //   console.log("App.componentWillUnMount");
  // }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { toDoLists, input } = this.state;
    // console.log("submit", toDoLists);
    if (input.length === 0) {
      alert('Please enter context')
    } else {
      toDoLists.push(input);
      this.setState({
        input: "",
        toDoLists: toDoLists,
      });
    }
  }

  handleDelete(event) {
    // console.log('delete',event.target.value)
    let index = this.state.toDoLists.indexOf(event.target.value);
    this.state.toDoLists.splice(index, 1)
          this.setState({
            input: "",
            toDoLists: this.state.toDoLists,
          });
  }

  render() {
    // console.log("render", this.state.delete, this.state.toDoLists, this.state.input);
    return (
      <div>
        <Header />
        <ToDoInput
          input={this.state.input}
          change={this.handleChange.bind(this)}
          submit={this.handleSubmit.bind(this)}
        />
        <ToDoItems
          toDoItems={this.state.toDoLists}
          deleteItem={this.handleDelete.bind(this)}
        />
      </div>
    );
  }
}

