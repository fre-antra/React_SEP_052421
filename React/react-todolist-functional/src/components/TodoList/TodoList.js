import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './TodoList.css'
import TodoItem from './TodoListItem/TodoListItem'
import { addTodoAPI, getTodoListAPI, deleteTodoAPI } from '../../apis/TodoAPI'

function TodoList() {
  const isFirstCall = useRef(true)
  const [state, setstate] = useState({
    todolist: [],
    inputTodoItem: '',
  })

  const handleTodoDone = e => {
    if (e.target !== e.currentTarget && e.target.id) {
      let itemId = e.target.id
      deleteTodoAPI(itemId).then(() => {
        setstate(prevState => {
          return {
            ...prevState,
            inputTodoItem: '',
            todolist: prevState.todolist.filter(
              todo => todo.id.toString() !== itemId
            ),
          }
        })
      })
    }
    e.stopPropagation()
  }

  const handleInputChange = event => {
    setstate({
      inputTodoItem: event.target.value,
    })
  }
  const handleInputEnterKey = e => {
    if (e.key === 'Enter') {
      const obj = {
        completed: false,
        title: state.inputTodoItem,
        userId: 1,
      }
      addTodoAPI(obj).then(data => {
        setstate(prevState => {
          return { inputTodoItem: '', todolist: [data, ...prevState.todolist] }
        })
      })
    }
  }
  useEffect(() => {
    if (isFirstCall.current === true) {
      isFirstCall.current = false
      // Setting the state to api result
      getTodoListAPI().then(json => {
        setstate(state => ({
          todolist: json,
        }))
      })
      // Event listner to the parent element (event bubling)
      const listListner = document.querySelector('#todolist__list')
      listListner.addEventListener('click', handleTodoDone, false)
    }
  }, [])

  return (
    <section className='todolist'>
      <header className='todolist__header'>
        <h4 className='heading'>TodoList</h4>
      </header>
      <input
        type='text'
        name='todoItem'
        className='todolist__input'
        value={state.inputTodoItem}
        onChange={handleInputChange}
        onKeyDown={handleInputEnterKey}
        placeholder='What are you going to do?'
      />
      <ul id='todolist__list' className='todolist__content'>
        {state.todolist.map(todo => (
          <TodoItem key={todo.id} id={todo.id} todo={todo}></TodoItem>
        ))}
      </ul>
    </section>
  )
}

export default TodoList
