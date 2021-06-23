import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
  const {todo} = props;
  return (
      <li className="todolist__content-item">
        <span>{todo.title}</span>
        <button className="btn-remove">X</button>
      </li>
  );
}

export default TodoItem;