import React, { useState, useEffect } from "react";
import Todo from "./Todo.js";
import './TodoList.css';

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem('todoList'));
        if (todoList) {
            setTodoList(todoList);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);



    const handleInputOnChange = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            let copyToDoList = [...todoList];
            copyToDoList = [
                ...copyToDoList,
                {
                    id: Math.random(),
                    title: e.target.value,
                    completed: false
                }
            ];
            console.log(copyToDoList);
            setTodoList(copyToDoList);
            e.target.value="";
        };
    };

    const removeTodo = (e) => {
        const id = e.target.id;
        setTodoList(todoList.filter(todo => +todo.id !== +id));
    }


    return (
        <div className="todoList">
            <header className="todoList__header">Todo List</header>
            <input
                type="text"
                placeholder="What you want to do?"
                className="todoList__input"
                value={todoList.title}
                onKeyUp={handleInputOnChange}
            />
            <ul className="todoList__content">
                {todoList.map((todo) => (
                    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
