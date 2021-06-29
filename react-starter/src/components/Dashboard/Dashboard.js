import React from "react";
import {withTodos} from "../../hoc/withTodos";

const Dashboard = props => {

  const totalTodosCount = props.todolist.length;
  const totalCompleted = props.todolist.filter(todo => todo.completed === true).length;

  return (
      <>
        <section>
          <h1>Total Todos Count: {totalTodosCount}</h1>
          <h1>Total Completed: {totalCompleted}</h1>
        </section>
      </>
  )
}

export default withTodos(Dashboard);