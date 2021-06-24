import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';
import {getAllTodos, addTodo, deleteTodo} from "../../apis/Api";
import {Todo} from "../../model/Todo";

class TodoList extends React.Component {
  state = {
    inputText: '',
    todoList: [],
  };

  componentDidMount() {
    getAllTodos().then(data => {
      this.setState({
        todoList: data
      })
    })
  }

  // onChange函数和value属性 用来双向绑定
  handlerChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  handlerKeyUp = e => {
    if (e.key === 'Enter') {
      const newTodo = new Todo(1, this.state.inputText, false)
      addTodo(newTodo).then(data => {
        this.setState({
          inputText: '',
          todoList: [data, ...this.state.todoList]
        })
      })
    }
  }

  handlerDelete = id => {
    this.setState({
      todoList: this.state.todoList.filter(x => x.id !== id)
    })
  }

  render() {
    return (
        <section className="todolist">
          <header className="todolist__header">
            <h4 className="heading">TodoList</h4>
          </header>
          <input
              type="text"
              className="todolist__input"
              placeholder="What are you going to do?"
              onChange={this.handlerChange}
              value={this.state.inputText}
              onKeyUp={this.handlerKeyUp}
          />
          <ul className="todolist__content">
            {this.state.todoList.map(todo => (
                <TodoItem key={todo.id} todo={todo} handlerDelete={this.handlerDelete}/>
            ))}
          </ul>
        </section>
    );
  }
}

export default TodoList;