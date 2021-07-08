import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import { Todo } from '../../model/Todo';
import './TodoList.css';

class TodoList extends React.Component {
  state = {
    inputText: '',
  };

  handleInputOnChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleInputKeyUp = (event) => {
    if (event.key === 'Enter') {
      const useId = 1;
      const title = this.state.inputText;
      const completed = false;
      const newTodo = new Todo(useId, title, completed);
      const { handleAddTodo } = this.props;
      handleAddTodo(newTodo);
      this.setState({
        inputText: '',
      });
    }
  };

  render() {
    const { todolist, handleRemoveTodo } = this.props;

    return (
      <section className="todolist">
        <header className="todolist__header">
          <h4 className="heading">TodoList</h4>
        </header>
        <input
          type="text"
          className="todolist__input"
          placeholder="What are you going to do?"
          onChange={this.handleInputOnChange}
          onKeyUp={this.handleInputKeyUp}
          value={this.state.inputText}
        />
        <ul className="todolist__content">
          {todolist.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={() => handleRemoveTodo(todo.id)}
            ></TodoItem>
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
