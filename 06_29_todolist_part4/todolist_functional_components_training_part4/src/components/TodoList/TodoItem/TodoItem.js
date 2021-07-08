import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li className="todolist__content-item">
      <span>{todo.title}</span>
      <button
        id={todo.id}
        className="btn-remove"
        onClick={() => removeTodo(todo.id)}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
