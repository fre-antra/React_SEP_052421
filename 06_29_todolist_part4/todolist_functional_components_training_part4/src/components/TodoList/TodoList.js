import React, { useState } from 'react';
import TodoItem from './TodoItem/TodoItem';
import { Todo } from '../../model/Todo';
import './TodoList.css';

const TodoList = ({ todolist, handleAddTodo, handleRemoveTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleInputOnChange = (event) => {
    setInputText(event.target.value);
  };

  const handleInputKeyUp = (event) => {
    if (event.key === 'Enter') {
      const useId = 1;
      const title = inputText;
      const completed = false;
      const newTodo = new Todo(useId, title, completed);
      handleAddTodo(newTodo);
      setInputText('');
    }
  };

  return (
    <section className="todolist">
      <header className="todolist__header">
        <h4 className="heading">TodoList</h4>
      </header>
      <input
        type="text"
        className="todolist__input"
        placeholder="What are you going to do?"
        onChange={handleInputOnChange}
        onKeyUp={handleInputKeyUp}
        value={inputText}
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

};

export default TodoList;
