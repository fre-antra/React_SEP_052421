import React, { Component } from 'react'
import Header from "./header/Header";
import ToDoInput from "./toDoInput/ToDoInput";
import ToDoItems from "./todoitems/ToDoItems";
// import "./App.scss";
import Dashboard from "./Dashboard/Dashboard"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      flag: true,
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
  handleFlag(e) {
    if (e.target.value === "Dashboard"){
      this.setState({
        flag: true,
      }); 
    } else {
            this.setState({
              flag: false,
            }); 
    }

  }

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
      // toDoLists.unshift(input);
      this.setState({
        input: "",
        toDoLists: [input, ...toDoLists],
      });
    }
  }

  // handleDelete(event) {
  //   // console.log('delete',event.target.value)
  //   // let index = this.state.toDoLists.indexOf(event.target.value);
  //   // this.state.toDoLists.splice(index, 1)
  //   let newList = this.state.toDoLists.filter(
  //     (item) => item !== event.target.value
  //   );
  //         this.setState({
  //           input: "",
  //           toDoLists: newList,
  //         });
  // }

  render() {
    // console.log("render", this.state.delete, this.state.toDoLists, this.state.input);
    return (
      <div>
        <Header changeFlag={this.state.flag} handleFlag = {this.handleFlag.bind(this)}/>
        {this.state.flag ? (
          <Dashboard />
        ) : (
          <>
            <ToDoInput
              input={this.state.input}
              change={this.handleChange.bind(this)}
              submit={this.handleSubmit.bind(this)}
            />
            {/* <ToDoItems
              toDoItems={this.state.toDoLists}
              deleteItem={this.handleDelete.bind(this)}
            /> */}
            <ToDoItems />
          </>
        )}
      </div>
    );
  }
}

