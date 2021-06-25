import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import './TodoList.css';
import { Todo } from "../../models/Todo";
import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';

const TodoList = () => {
  const [todolist, setTodolist] = React.useState([]);
  const [inputText, setInputText] = React.useState('');

  React.useEffect(() => {
    console.log('function todolist didMount');
    getAllTodos()
      .then(data => setTodolist(data));
  }, []);

  const handleRemoveTodo = (id) => {
    try {
      deleteTodo(id).then(data => {
        setTodolist(
          todolist.filter((todo) => todo.id !== id)
        );
      });
    } catch (err) {
      console.warn(err);
    }
  };

  // event delegation and it needs todoItems id
  const handleRemoveTodo2 = (event) => {
    console.log(event.target.className);
    if (event.target.className === 'btn-remove') {
      const id = event.target.id;
      try {
        deleteTodo(+id).then(data => {
          setTodolist(
            todolist.filter((todo) => +todo.id !== +id)
          );
        });
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  const handleInputKeyUp = (event) => {
    console.log(event.key);
    if (event.key === 'Enter') {
      const userId = 1;
      const title = inputText;
      const completed = false;
      const newTodo = new Todo(userId, title, completed);
      addTodo(newTodo).then((data) => {
        setTodolist([data, ...todolist]);
        setInputText('');
      });
    };
  };

  return (
    <section className="todolist">
      <header className="todolist__header">
        <h4 className="heading">TodoList</h4>
      </header>
      <input
        type="text"
        className="todolist__input"
        placeholder="input here"
        onChange={handleInputChange}
        value={inputText}
        onKeyUp={handleInputKeyUp}
      />
      <ul className="todolist__content" onClick={handleRemoveTodo2}>
        {todolist.map((todo) => (
          // <TodoItem key={todo.id} todo={todo} removeTodo={this.handleRemoveTodo} />
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
