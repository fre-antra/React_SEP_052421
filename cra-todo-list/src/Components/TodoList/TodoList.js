import React, { Component } from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
import { getAllTodos, addTodo, deleteTodo } from "../../apis/TodoAPI";

export default class TodoList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      todolist: [],
      newTodoItem: "",
    };
    this.keyPressHandler = this.keyPressHandler.bind(this);
    this.deleteTodoDelegation = this.deleteTodoDelegation.bind(this);
  }

  keyPressHandler(e) {
    if (e.key === "Enter") {
      const newTodo = {
        id: this.state.todolist.length,
        userId: this.state.todolist.length + 1,
        title: this.state.newTodoItem,
        completed: false,
      };
      addTodo(newTodo).then((data) => {
        this.setState((prevState) => ({
          ...prevState,
          todolist: [data, ...prevState.todolist],
          newTodoItem: "",
        }));
      });
    }
  }

  deleteTodoHandler(id) {
    // deleteTodo(id).then((data) => {
    //   this.setState({
    //     ...this.state,
    //     todolist: this.state.todolist.filter((todo) => todo.id !== id),
    //   });
    // });
  }

  deleteTodoDelegation(e) {
    deleteTodo(+e.target.id).then((data) => {
      this.setState({
        ...this.state,
        todolist: this.state.todolist.filter(
          (todo) => +todo.id !== +e.target.id
        ),
      });
    });
  }

  componentDidMount() {
    getAllTodos().then((data) => {
      this.setState({
        todolist: data,
      });
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
        <ul className="todolist__content" onClick={this.deleteTodoDelegation}>
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
