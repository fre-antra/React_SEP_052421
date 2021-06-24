import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem";
import { getAllTodos, deleteTodo, addTodo } from "../../apis/TodoAPI";
import { Todo } from "../../model/Todo";

class TodoList extends React.Component {
  state = {
    todolist: [],
  };

  handleRemoveTodo = (id) => {
    deleteTodo(id)
      .then(() => {
        this.setState({
          todolist: this.state.todolist.filter((todo) => todo.id !== id),
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  render() {
    return (
      <section className="todolist">
        <header className="todolist__header">
          <h4 className="heading">TodoList</h4>
        </header>
        <input type="text" className="todolist__input" placeholder="What are you going to do?" />
        <ul className="todolist__content">
          {this.state.todolist.map((todo) => (
            <TodoItem key={todo.id} todo={todo} removeTodo={this.handleRemoveTodo}></TodoItem>
          ))}
        </ul>
      </section>
    );
  }
  componentDidMount() {
    getAllTodos().then((data) => {
      this.setState({
        todolist: data,
      });
    });
  }
}

export default TodoList;
