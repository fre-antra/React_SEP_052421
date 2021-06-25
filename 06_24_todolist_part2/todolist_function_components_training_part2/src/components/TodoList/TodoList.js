import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import './TodoList.css';
import { Todo } from "../../models/Todo";
import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';

const TodoList = () => {
  const [todolist, setTodolist] = React.useState([]);
  const [inputText, setInputText] = React.useState('');

  React.useEffect(() => console.log('update'));

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
  // const handleRemoveTodo2 = (event) => {
  //   console.log(event.target.className);
  //   if (event.target.className === 'btn-remove') {
  //     const id = event.target.id;
  //     try {
  //       deleteTodo(+id).then(data => {
  //         setTodolist(
  //           todolist.filter((todo) => +todo.id !== +id)
  //         );
  //       });
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   }
  // };

  const handleInputChange = (event) => {
    console.log('current event target value is', event.target.value);
    setInputText(event.target.value);
  };

  const handleInputKeyUp = (event) => {
    console.log('current key is', event.key);
    if (event.key === 'Enter' && inputText) {
      const userId = 1;
      const title = inputText;
      const completed = false;
      const newTodo = new Todo(userId, title, completed);
      // addTodo(newTodo).then((data) => getAllTodos()).then(newData => setTodolist(newData));
      // fake api seems like can not actually add a newTodo
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
        onChange={handleInputChange} // 2-way-binding
        value={inputText}  // 2-way binding
        onKeyUp={handleInputKeyUp}
      />
      <ul className="todolist__content" >
        {/* <ul className="todolist__content" onClick={handleRemoveTodo2}> */}
        {todolist.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={handleRemoveTodo} />
          // <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
