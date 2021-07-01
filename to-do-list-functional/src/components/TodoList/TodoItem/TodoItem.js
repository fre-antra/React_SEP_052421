import React from "react";
import "./TodoItem.css";

function TodoItem({ item, removeTodo }) {
  // console.log(removeTodo);
  return (
    <li className="todolist__content-item">
      <span>{item.title}</span>
      <button
        id={item.id}
        className="btn-remove"
        onClick={() => removeTodo(item.id)}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
