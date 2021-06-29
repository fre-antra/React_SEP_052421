import React from "react";
import "./toDoItem.css";

export default function ToDoItem({ item, deleteItem }) {
  // console.log(item);
  return (
    <div className="to-do-list-container">
      <li className="to-do-list-item">{item.title}</li>
      <button onClick={()=>deleteItem(item.id)} className="to-do-list-btn">
        X
      </button>
    </div>
  );
}
