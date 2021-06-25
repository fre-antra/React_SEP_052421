import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  return (
    <Layout>
      <TodoList></TodoList>
    </Layout >
  );
};

export default App;
