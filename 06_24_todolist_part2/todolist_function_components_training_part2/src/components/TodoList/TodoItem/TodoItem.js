import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
  const { todo, removeTodo } = props;
  return (
    <>
      <li>
        <span>{todo.title} </span>
        {/* <button id={todo.id} className="btn-remove" onClick={() => removeTodo(todo.id)}>X</button> */}
        <button id={todo.id} className="btn-remove" >X</button>
      </li>
    </>
  );
};

export default TodoItem;