import React, { useEffect, useState } from "react";
import { fetchList, addTodo, deleteTodo } from "../../Api/Api";
import "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem";
import { Todo } from "../../model/Todo";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([]);
  const handleChange = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
    // console.log(input)
  };

  const handlerRemove = (id) => {
    deleteTodo(id)
      .then((data) => {

        let updateList = todolist.filter((todo) => todo.id !== id);
        setTodolist(updateList);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const handleInputKeyUp = (event) => {
    if (event.key === "Enter") {
      const useId = 1;
      const title = input;
      const completed = false;
      const newTodo = new Todo(useId, title, completed);
      addTodo(newTodo).then((data) => {
        setInput('')
        setTodolist([data, ...todolist]);
      });
    }
  };

  useEffect(() => {
    fetchList().then((data) => setTodolist(data));
  }, []);
  
  return (
    <section className="todolist">
      <header className="todolist__header">
        <h4 className="heading">TodoList</h4>
      </header>
      <input
        type="text"
        className="todolist__input"
        placeholder="What are you going to do?"
        onChange={handleChange}
        onKeyUp={handleInputKeyUp}
        value={input}
      />
      <ul className="todolist__content">
        {todolist.map((item) => (
          <TodoItem key={item.id} item={item} removeTodo={handlerRemove} />
        ))}
      </ul>
    </section>
  );
}
