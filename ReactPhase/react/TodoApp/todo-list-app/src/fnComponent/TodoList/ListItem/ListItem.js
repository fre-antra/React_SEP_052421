import React from 'react'
import './ListItemStyle.css'


const ListItem = ({ todo, removeItem }) => {
    console.log(removeItem);
    return (
      <>
        <li className='todolist__list-item'>
          <span>{todo.title} </span>
          <button id={todo.id} className="btn-remove" onClick={removeItem}>X</button>
        </li>
      </>
    );
  };
  

export default ListItem
