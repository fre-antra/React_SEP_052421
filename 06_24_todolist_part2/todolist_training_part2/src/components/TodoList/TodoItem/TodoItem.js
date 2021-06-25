import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
  render() {
    const { todo, removeTodo } = this.props;
    return (
      <>
        <li>
          <span>{todo.title} </span>
          {/* <button id={todo.id} className="btn-remove" onClick={() => removeTodo(todo.id)}>X</button> */}
          <button id={todo.id} className="btn-remove" >X</button>
        </li>
      </>
    );
  }
}

export default TodoItem;