import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
  const { todo, onClickRemove } = props;
  return (
    <>
      <li>
        <span>{todo.title} </span>
        <button id={todo.id} className="btn-remove" onClick={onClickRemove}>X</button>
      </li>
    </>
  );
};

export default TodoItem;