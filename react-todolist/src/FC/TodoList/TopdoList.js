import React, { useState, useEffect } from 'react';
import './TodoListStyle.css';
import ListItem from './ListItem/ListItem';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setTodolist(data));
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addItem = (event) => {
    const newTodo = event.target.value;

    if (event.key === 'Enter' && newTodo !== '') {
      const newTodoItem = {
        id: Math.floor(Math.random() * 1000),
        userId: Math.floor(Math.random() * 1000),
        title: newTodo,
        completed: false,
      };
      setTodolist([newTodoItem, ...todolist]);
      setInput('');
    }
  };

  const removeItem = (event) => {
    const id = event.target.id;
    const newTodoList = todolist.filter((todoItem) => +todoItem.id !== +id);
    setTodolist(newTodoList);
  };

  return (
    <section className="todolist">
      <header className="todolist__header">
        <h1>Please input your new todos.</h1>
      </header>

      <input
        type="text"
        className="todolist__input"
        value={input}
        placeholder="Add new todo event"
        onChange={handleChange}
        onKeyDown={addItem}
      />

      <ul className="todolist__list">
        {todolist.map((todo) => {
          return <ListItem key={todo.id} todo={todo} removeItem={removeItem} />;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
