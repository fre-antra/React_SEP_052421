import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, Ondelete }) {
  return (
    <li className="todolist__content-item">
      <span>{todo.title}</span>
      <button id={todo.id} className="btn-remove" onClick={Ondelete}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
