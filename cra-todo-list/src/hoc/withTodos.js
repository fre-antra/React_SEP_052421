import React from "react";
import { getAllTodos, addTodo, deleteTodo } from "../apis/TodoAPI";

export const withTodos = (WrappedComponenet) =>
  class NewComponent extends React.Component {
    state = {
      todolist: [],
    };

    handleAddTodo = (newTodo) => {
      addTodo(newTodo).then((data) => {
        this.setState({
          todolist: [data, ...this.state.todolist],
        });
      });
    };

    handleRemoveTodo = (id) => {
      deleteTodo(id).then((data) => {
        this.setState({
          todolist: this.state.todolist.filter((todo) => todo.id !== id),
        });
      });
    };

    componentDidMount() {
      getAllTodos().then((data) => {
        this.setState({
          todolist: data,
        });
      });
    }

    render() {
      return (
        <WrappedComponenet
          todolist={this.state.todolist}
          handleAddTodo={this.handleAddTodo}
          handleRemoveTodo={this.handleRemoveTodo}
        />
      );
    }
  };
