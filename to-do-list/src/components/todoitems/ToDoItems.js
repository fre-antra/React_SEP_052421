import React from 'react'
import ToDoItem from './todoitem/ToDoItem'
import './toDoItems.css'

export default function ToDoItems({ toDoItems, deleteItem }) {
  // console.log('toDoItems, ', toDoItems);
  return (
    <ul className='to-do-list-ul'>
      {toDoItems.map((item, index) => (
        <ToDoItem key={index} item={item} deleteItem={deleteItem} />
      ))}
    </ul>
  );
}
