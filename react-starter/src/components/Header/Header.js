import React from 'react';
import './Header.css';
import TodosCount from "../TodosCount/TodosCount";
import WithTodosData from "../WithTodosData/WithTodosData";

export default class Header extends React.Component {
  render() {
    return (
        <div className="header-list">
          <nav className="nav">
            <a onClick={() => this.props.handleChangeActivePage('Dashboard')}>Dashboard</a>
            <a onClick={() => this.props.handleChangeActivePage('TodoList')}>TodoList</a>
          </nav>
          <WithTodosData>
            {(_, __, todolist) => <TodosCount todolist={todolist}/>}
          </WithTodosData>
        </div>
    )
  }
}