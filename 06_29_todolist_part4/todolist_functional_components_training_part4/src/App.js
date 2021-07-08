import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import Dashborad from './components/Dashboard/Dashboard';
import WithTodosData from './components/WithTodosData/WithTodosData';

const App = () => {
  const [activePage, setActivePage] = useState('TodoList');

  const handleChangeActivePage = (newActivePage) => {
    setActivePage(newActivePage);
  };

  let content = null;
  switch (activePage) {
    case 'Dashboard':
      content = (
        <WithTodosData
          renderHeader={(headerTitle) => <header>{headerTitle}</header>} // renderHeader + render
          render={(removeTodo, addTodo, todolist) => (
            <Dashborad todolist={todolist}></Dashborad>
          )}
        />
      );
      break;
    case 'TodoList':
      content = (
        <WithTodosData>
          {(removeTodo, addTodo, todolist) => ( // children
            <TodoList
              todolist={todolist}
              handleRemoveTodo={removeTodo}
              handleAddTodo={addTodo}
            ></TodoList>
          )}
        </WithTodosData>
      );
      break;
    default:
      break;
  }

  return (
    <Layout handleChangeActivePage={handleChangeActivePage}>
      {content}
    </Layout>
  );
};

export default App;
