import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
  render() {
    const { todo, onClickRemove } = this.props;
    return (
      <>
        <li>
          <span>{todo.title} </span>
          <button id={todo.id} className="btn-remove" onClick={onClickRemove}>X</button>
        </li>
      </>
    );
  }
}

export default TodoItem;