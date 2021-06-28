import React from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../apis/TodoAPI';

export const withTodos = (WrappedComponent) => (
  class NewComponent extends React.Component {
    state = {
      todolist: [],
    };

    handleAddTodo = (newTodo) => {
      addTodo(newTodo).then((data) => {
        console.log('addTodo', data); // addTodo {userId: 1, title: "newtodo", completed: false, id: 201}
        this.setState({
          todolist: [data, ...this.state.todolist],
        });
      });
    };

    handleRemoveTodo = (id) => {
      deleteTodo(id)
        .then((data) => {
          console.log('removeTodo', data); // removeTodo {}
          this.setState({
            todolist: this.state.todolist.filter((todo) => todo.id !== id),
          });
        })
        .catch((err) => {
          console.warn(err);
        });
    };

    componentDidMount = () => {
      getAllTodos().then((data) => {
        this.setState({
          todolist: data,
        });
      });
    };

    render() {
      return (
        <WrappedComponent
          todolist={this.state.todolist}
          handleRemoveTodo={this.handleRemoveTodo}
          handleAddTodo={this.handleAddTodo}
        />
      );
    }
  }
);
