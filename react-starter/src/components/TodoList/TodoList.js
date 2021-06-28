import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';
import {Todo} from "../../model/Todo";
import {withTodos} from "../../hoc/withTodos";

class TodoList extends React.Component {
  state = {
    inputText: ''
  };

  // onChange函数和value属性 用来双向绑定
  handlerChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  handlerKeyUp = e => {
    if (e.key === 'Enter') {
      const newTodo = new Todo(1, this.state.inputText, false)
      this.props.handleAddTodo(newTodo)
      this.setState({
        inputText: ''
      })
    }
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
            {this.props.todolist.map(todo => (
                <TodoItem key={todo.id}
                          todo={todo}
                          removeTodo={this.props.handleRemoveTodo}/>
            ))}
          </ul>
        </section>
    );
  }
}

export default withTodos(TodoList);