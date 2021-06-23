import React from "react";
import './toDoItem.css'

export default function ToDoItem({item, deleteItem}) {
  return (
    <div className="to-do-list-container">
      <li className="to-do-list-item">{item}</li>
      <button onClick={deleteItem} value={item} className="to-do-list-btn">
        X
      </button>
    </div>
  );
}
