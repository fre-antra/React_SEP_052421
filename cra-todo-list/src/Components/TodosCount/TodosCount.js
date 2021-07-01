import React from "react";

function TodosCount(props) {
  const { todolist } = props;
  return (
    <span style={{ fontSize: "23px", marginLeft: "40px", color: "#ddd" }}>
      Todos: {todolist.length}
    </span>
  );
}

export default TodosCount;
