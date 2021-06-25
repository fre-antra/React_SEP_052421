import React from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <Layout>
      <TodoList></TodoList>
    </Layout>
  )
}

export default App
