import React, { useState, useEffect } from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../apis/TodoAPI';

export const withTodos = (WrappedComponent) => (
  function NewComponent() {
    const [todolist, setTodilist] = useState([]);

    useEffect(() => {
      getAllTodos().then(data => {
        setTodilist(data);
      });
    }, []);

    const handleAddTodo = (newTodo) => {
      addTodo(newTodo).then((data) => {
        console.log('addTodo', data); // addTodo {userId: 1, title: "newtodo", completed: false, id: 201}
        setTodilist([data, ...todolist]);
      });
    };

    const handleRemoveTodo = (id) => {
      deleteTodo(id)
        .then((data) => {
          console.log('removeTodo', data); // removeTodo {}
          setTodilist(todolist.filter((todo) => todo.id !== id));
        })
        .catch((err) => {
          console.warn(err);
        });
    };




    return (
      <WrappedComponent
        todolist={todolist}
        handleRemoveTodo={handleRemoveTodo}
        handleAddTodo={handleAddTodo}
      />
    );
  }
);
