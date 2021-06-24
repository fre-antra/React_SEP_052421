import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
  const {todo, handlerDelete} = props;
  return (
      <li className="todolist__content-item">
        <span>{todo.title}</span>
        <button className="btn-remove" onClick={() => handlerDelete(todo.id)}>X</button>
      </li>
  );
}

export default TodoItem;