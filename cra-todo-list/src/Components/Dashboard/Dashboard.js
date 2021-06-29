import React, { Component } from "react";
import "./Dashboard.css";
import { withTodos } from "../../hoc/withTodos";

class Dashboard extends Component {
  render() {
    const { todolist } = this.props;
    const todoLength = todolist.length;
    const todoCompletedLength = todolist.filter(
      (todo) => todo.completed === true
    ).length;
    return (
      <div className="dashboard">
        <h3>Total number of Todos: {todoLength}</h3>
        <h3>Total number of Completed Todos: {todoCompletedLength}</h3>
      </div>
    );
  }
}

export default withTodos(Dashboard);
