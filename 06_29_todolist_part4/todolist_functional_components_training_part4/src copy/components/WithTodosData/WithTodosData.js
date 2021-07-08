import React, { Fragment, useState, useEffect } from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';

const WithTodosData = ({ render, children, renderHeader }) => {

  const [title, setTitle] = useState('TodoData');
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    getAllTodos().then(data => {
      setTodolist(data);
    });
  }, []);

  const handleAddTodo = (newTodo) => {
    addTodo(newTodo).then((data) => {
      this.setTodolist([data, ...this.state.todolist]);
    });
  };

  const handleRemoveTodo = (id) => {
    deleteTodo(id)
      .then((data) => {
        setTodolist(todolist.filter((todo) => todo.id !== id));
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  let header = null;
  let content = null;

  if (renderHeader) {
    header = renderHeader(title);
  }

  if (render) {
    content = render(
      handleRemoveTodo,
      handleAddTodo,
      todolist
    );
  } else if (children) {
    content = children(
      handleRemoveTodo,
      handleAddTodo,
      todolist
    );
  }

  return (
    <Fragment>
      {header}
      {content}
    </Fragment>
  );
};

export default WithTodosData;

