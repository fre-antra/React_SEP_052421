import React, { Fragment } from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';

class WithTodosData extends React.Component {
  state = {
    title: 'TodoData',
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
    deleteTodo(id)
      .then((data) => {
        this.setState({
          todolist: this.state.todolist.filter((todo) => todo.id !== id),
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  componentDidMount() {
    getAllTodos().then((data) => {
      this.setState({
        todolist: data,
      });
    });
  }
  // as same as HOC, but render() is different

  render() {
    let header = null;
    let content = null;
    const { render, children, renderHeader } = this.props;

    if (renderHeader) {
      header = renderHeader(this.state.title);
    }

    if (render) {
      content = render(
        this.handleRemoveTodo,
        this.handleAddTodo,
        this.state.todolist
      );
    } else if (children) {
      content = children(
        this.handleRemoveTodo,
        this.handleAddTodo,
        this.state.todolist
      );
    }

    return (
      <Fragment>
        {header}
        {content}
      </Fragment>
    );
  }
}

export default WithTodosData;

