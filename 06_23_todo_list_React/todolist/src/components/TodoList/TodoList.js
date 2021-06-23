import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import './TodoList.css';

class TodoList extends React.Component {
  state = {
    todolist: [],
  };

  onClickRemove = (e) => {
    console.log(e);
    const id = e.target.id;
    this.setState({ todolist: this.state.todolist.filter(todo => +todo.id !== +id) });
    // id is String!!
  };

  componentDidMount() {
    console.log();
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';
    fetch([baseUrl, todoPath].join('/'))
      .then((response) => response.json())
      .then((todolist) => this.setState({ todolist: todolist }));

  }

  // state = {
  //   todolist: [
  //     { id: 0, userId: 1, title: 'buy a book', completed: false },
  //     { id: 1, userId: 2, title: 'buy a car', completed: false }
  //   ]
  // };

  render() {
    return (
      <section className="todolist">
        <header className="todolist__header">todo list</header>
        <input
          type="text"
          className="todolist__input"
          placeholder="input here"
        />
        <ul className="todolist__content">
          {this.state.todolist.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onClickRemove={this.onClickRemove} />
          ))}
        </ul>
      </section>
    );
  }
};

export default TodoList;