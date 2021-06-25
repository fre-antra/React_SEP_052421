import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem/TodoItem'
import { addTodoAPI, getTodoListAPI, deleteTodoAPI } from '../../apis/TodoAPI'

class TodoList extends React.Component {
  state = {
    todolist: [],
    inputTodoItem: '',
  }
  handleTodoDone = e => {
    if (e.target !== e.currentTarget && e.target.id) {
      let itemId = e.target.id
      deleteTodoAPI(itemId).then(() => {
        this.setState(prevState => {
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

  handleInputChange = event => {
    this.setState({
      inputTodoItem: event.target.value,
    })
  }
  handleInputEnterKey = e => {
    if (e.key === 'Enter') {
      const obj = {
        completed: false,
        title: this.state.inputTodoItem,
        userId: 1,
      }
      addTodoAPI(obj).then(data => {
        this.setState(prevState => {
          return { inputTodoItem: '', todolist: [data, ...prevState.todolist] }
        })
      })
    }
  }

  componentDidMount() {
    // Setting the state to api result
    getTodoListAPI().then(json => {
      return this.setState(state => ({
        todolist: json,
      }))
    })
    // Event listner to the parent element (event bubling)
    const listListner = document.querySelector('#todolist__list')
    listListner.addEventListener('click', this.handleTodoDone, false)
  }
  render() {
    return (
      <section className='todolist'>
        <header className='todolist__header'>
          <h4 className='heading'>TodoList</h4>
        </header>
        <input
          type='text'
          name='todoItem'
          className='todolist__input'
          value={this.state.inputTodoItem}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputEnterKey}
          placeholder='What are you going to do?'
        />
        <ul id='todolist__list' className='todolist__content'>
          {this.state.todolist.map(todo => (
            <TodoItem key={todo.id} id={todo.id} todo={todo}></TodoItem>
          ))}
        </ul>
      </section>
    )
  }
}

export default TodoList
