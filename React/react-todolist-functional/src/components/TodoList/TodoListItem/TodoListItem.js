import React from 'react'
import './TodoListItem.css'

function TodoItem(props) {
  const { todo } = props

  return (
    <li className='todolist__content-item'>
      <span>{todo.title}</span>
      <button id={todo.id} className='btn-remove'>
        X
      </button>
    </li>
  )
}

export default TodoItem
