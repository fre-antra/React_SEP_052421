import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import Dashborad from './components/Dashboard/Dashboard';

const App = () => {
  const [activePage, setActivePage] = useState('TodoList');

  const handleChangeActivePage = (newActivePage) => {
    setActivePage(newActivePage);
  };

  let content = null;
  switch (activePage) {
    case 'Dashboard':
      content = <Dashborad />;
      break;
    case 'TodoList':
      content = <TodoList />;
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
