import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import './TodoList.css';
import { Todo } from "../../models/Todo";
import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';

class TodoList extends React.Component {
  state = {
    todolist: [],
    inputText: ''
  };

  componentDidMount() {
    getAllTodos().then((data) => {
      this.setState({
        todolist: data
      });
    });
  }

  handleRemoveTodo = (id) => {
    try {
      deleteTodo(id).then(data => {
        this.setState({
          todolist: this.state.todolist.filter((todo) => todo.id !== id)
        });
      });
    } catch (err) {
      console.warn(err);
    }
  };

  // event delegation and it needs todoItems id
  handleRemoveTodo2 = (event) => {
    console.log(event.target.className);
    if (event.target.className === 'btn-remove') {
      const id = event.target.id;
      try {
        deleteTodo(+id).then(data => {
          this.setState({
            todolist: this.state.todolist.filter((todo) => +todo.id !== +id)
          });
        });
      } catch (err) {
        console.warn(err);
      }
    }
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ inputText: event.target.value });
  };

  handleInputKeyUp = (event) => {
    console.log(event.key);
    if (event.key === 'Enter') {
      const userId = 1;
      const title = this.state.inputText;
      const completed = false;
      const newTodo = new Todo(userId, title, completed);
      addTodo(newTodo).then((data) => {
        this.setState({
          todolist: [data, ...this.state.todolist],
          inputText: ''
        });
      });
    }
  };

  render() {
    return (
      <section className="todolist">
        <header className="todolist__header">
          <h4 className="heading">TodoList</h4>
        </header>
        <input
          type="text"
          className="todolist__input"
          placeholder="input here"
          onChange={this.handleInputChange}
          value={this.state.inputText}
          onKeyUp={this.handleInputKeyUp}
        />
        <ul className="todolist__content" onClick={this.handleRemoveTodo2}>
          {this.state.todolist.map((todo) => (
            // <TodoItem key={todo.id} todo={todo} removeTodo={this.handleRemoveTodo} />
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>
    );
  }
};

export default TodoList;
