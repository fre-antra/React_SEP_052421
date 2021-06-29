import React, { Component } from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
import { withTodos } from "../../hoc/withTodos";
import { Todo } from "../../Models/Todo";

class TodoList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      newTodoItem: "",
    };
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  keyPressHandler(e) {
    if (e.key === "Enter") {
      const { todolist, handleAddTodo } = this.props;
      const newTodo = new Todo(
        todolist.length + 1,
        this.state.newTodoItem,
        false,
        todolist.length
      );
      handleAddTodo(newTodo);
      this.setState({
        newTodoItem: "",
      });
    }
  }

  render() {
    const { todolist, handleRemoveTodo } = this.props;
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
          {todolist.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              Ondelete={() => handleRemoveTodo(todo.id)}
            ></TodoItem>
          ))}
        </ul>
      </section>
    );
  }
}

export default withTodos(TodoList);
