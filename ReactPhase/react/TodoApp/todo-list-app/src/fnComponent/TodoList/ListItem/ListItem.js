import React from 'react'
import './ListItemStyle.css'


const ListItem = ({ todo, removeItme }) => {
    console.log(removeItme);
    return (
      <>
        <li className='todolist__list-item'>
          <span>{todo.title} </span>
          <button id={todo.id} className="btn-remove" onClick={removeItme}>X</button>
        </li>
      </>
    );
  };
  

export default ListItem
