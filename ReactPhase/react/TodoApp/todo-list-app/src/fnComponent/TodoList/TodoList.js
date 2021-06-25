import React, { useState, useEffect,useSelector } from "react";
import "./TodoListStyle.css";
import ListItem from "./ListItem/ListItem";
import { useDispatch } from "react-redux";
import { addTodolist, removeTodolist } from "../../redux/ducks/todo";


const TodoList = () => {
  // const [todolist, setTodolist] = useState([]);

  // useEffect(() => {
  //   console.log("component Did Mount");
  //   const baseUrl = "https://jsonplaceholder.typicode.com";
  //   const todoPath = "todos";
  //   fetch([baseUrl, todoPath].join("/"))
  //     .then((res) => res.json())
  //     .then((data) => setTodolist(data));
  // }, []);

  // const addItem = (event) => {
  //   const newTodo = event.target.value;
    
  //   if (event.key === 'Enter' && newTodo !== "") {
  //     const newTodoItem = {
  //       id: Math.random() * 10000,
  //       userId: 222,
  //       title: newTodo,
  //       completed: false,
  //     };

  //     // console.log(newTodoItem, "Item added");
  //     setTodolist([newTodoItem, ...todolist]);
  //     event.target.value = '' //可能不正式
  //   }
  // };

  // const removeItem = (event) => {
  //   const id = event.target.id;
  //   const newTodoList = todolist.filter((todoItem) =>
  //   // convert them to number
  //    +todoItem.id !== +id
  //   )
  //   setTodolist(newTodoList)
  //   console.log("Item Removed");
  // };


  // ------- redux ---------
  const todolist = useSelector(state => state.todolist.todolist)
  const dispatch = useDispatch()

  const addItem = () => {
    dispatch(addTodolist())
  }
  
  const removeItem = () => {
    dispatch(removeTodolist())
  }
  // -----------------------


  return (
    <section className="todolist">
      <header className="todolist__header">
        <h1>this is Todo List</h1>
      </header>

      <input
        type="text"
        className="todolist__input"
        placeholder="Add new todo event"
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
