import React from 'react';
import Logo from '../Logo/Logo';
import TodosCount from '../TodosCount/TodosCount';
import WithTodosData from '../WithTodosData/WithTodosData';
import { MyLink } from '../../MyRouter/MyRouter';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-list">
        <Logo></Logo>
        <nav className="nav">
          <MyLink to="/dashboard">Dashboard</MyLink>
          <MyLink to="todolist">TodoList</MyLink>
          <MyLink to="/home">HOME</MyLink>
          <MyLink to="/about">About</MyLink>
        </nav>
        <WithTodosData>
          {(_, __, todolist) => <TodosCount todolist={todolist}></TodosCount>}
        </WithTodosData>
      </div>
    );
  }
}

export default Header;
