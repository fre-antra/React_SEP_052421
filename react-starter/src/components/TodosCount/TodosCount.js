import React from "react";

const TodosCount = props => {
  return (
      <span>Todos: {props.todolist.length}</span>
  )
}

export default TodosCount;