import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import './TodoList.css';

const TodoList = () => {
  const [todolist, setTodolist] = React.useState([]);
  React.useEffect(() => {
    console.log('function todolist didMount');
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';
    fetch([baseUrl, todoPath].join('/'))
      .then((response) => response.json())
      .then((todolist) => setTodolist(todolist));
  }, []);

  const onClickRemove = (e) => {
    const id = e.target.id;
    setTodolist(todolist.filter(todo => +todo.id !== +id));
    // id is String!!
  };

  const addNewTodo = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      let copyToDoList = [...todolist];
      copyToDoList = [
        {
          userId: 1,
          id: todolist.length + 1,
          title: e.target.value,
          completed: false
        },
        ...copyToDoList
      ];
      setTodolist(copyToDoList);
    };
  };

  return (
    <section className="todolist">
      <header className="todolist__header">todo list</header>
      <input
        type="text"
        className="todolist__input"
        placeholder="input here"
        onKeyUp={addNewTodo}
      />
      <ul className="todolist__content">
        {todolist.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onClickRemove={onClickRemove} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;