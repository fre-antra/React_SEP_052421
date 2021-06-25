import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
// import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <Layout>
      {/* <Dashboard></Dashboard> */}
      <TodoList></TodoList>
    </Layout >
  );
};

export default App;