import React, { Component } from 'react'
import Header from "./header/Header";
import ToDoInput from "./toDoInput/ToDoInput";
import ToDoItems from "./todoitems/ToDoItems";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      toDoLists:[],
      input: ''
    }
  }
  
  render() {
    return (
      <div>
        <h1>todoapp</h1>
        <Header />
        <ToDoInput />
        <ToDoItems />
      </div>
    );
  }
}

