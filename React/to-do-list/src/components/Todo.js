import React from 'react';
import './Todo.css';

const Todo = (props) => {
    const { todo, removeTodo } = props;

    return (
        <div>
            <li>
                <span>{todo.title}</span>
                <button id={todo.id} className="btn__remove" onClick={removeTodo}>X</button>
            </li>

        </div>
    )
}

export default Todo;
