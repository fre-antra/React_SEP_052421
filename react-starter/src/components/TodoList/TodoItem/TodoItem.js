import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
  const {todo, removeTodo} = props;
  return (
      <li className="todolist__content-item">
        <span>{todo.title}</span>
        <button className="btn-remove" onClick={() => removeTodo(todo.id)}>X</button>
      </li>
  );
}

export default TodoItem;