import React, { Component } from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      todolist: [
        { id: 0, userId: 1, title: "buy a book", completed: false },
        { id: 1, userId: 2, title: "buy a car", completed: false },
      ],
      newTodoItem: "",
    };
    this.keyPressHandler = this.keyPressHandler.bind(this);
    //this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
  }

  keyPressHandler(e) {
    if (e.key === "Enter") {
      this.setState((prevState) => ({
        ...prevState,
        todolist: [
          ...prevState.todolist,
          {
            id: prevState.todolist.length,
            userId: prevState.todolist.length + 1,
            title: prevState.newTodoItem,
            completed: false,
          },
        ],
      }));

      this.setState((prevState) => ({
        ...prevState,
        newTodoItem: "",
      }));
    }
  }

  deleteTodoHandler(id) {
    this.setState({
      ...this.state,
      todolist: this.state.todolist.filter((todo) => todo.id !== id),
    });
  }
  render() {
    return (
      <section className="todolist">
        <header className="todolist__header">
          <h4 className="heading">TodoList</h4>
        </header>
        <input
          type="text"
          className="todolist__input"
          placeholder="What are you going to do?"
          onChange={(e) => {
            this.setState({ ...this.state, newTodoItem: e.target.value });
          }}
          value={this.state.newTodoItem}
          onKeyPress={this.keyPressHandler}
        />
        <ul className="todolist__content">
          {this.state.todolist.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              Ondelete={() => this.deleteTodoHandler(todo.id)}
            ></TodoItem>
          ))}
        </ul>
      </section>
    );
  }
}
