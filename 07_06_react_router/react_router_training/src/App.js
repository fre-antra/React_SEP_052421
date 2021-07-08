import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import Dashborad from './components/Dashboard/Dashboard';
import WithTodosData from './components/WithTodosData/WithTodosData';
import { BrowserRouter } from 'react-router-dom';
import { MyRoute } from './MyRouter/MyRouter';

class App extends React.Component {
  state = {
    activePage: 'TodoList',
  };

  handleChangeActivePage = (newActivePage) => {
    this.setState({
      activePage: newActivePage,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <MyRoute exact path="/todolist">
            <WithTodosData>
              {(removeTodo, addTodo, todolist) => (
                <TodoList
                  todolist={todolist}
                  handleRemoveTodo={removeTodo}
                  handleAddTodo={addTodo}
                ></TodoList>
              )}
            </WithTodosData>
          </MyRoute>
          <MyRoute exact path="/dashboard">
            <WithTodosData
              renderHeader={(headerTitle) => <header>{headerTitle}</header>}
              render={(removeTodo, addTodo, todolist) => (
                <Dashborad todolist={todolist}></Dashborad>
              )}
            ></WithTodosData>
          </MyRoute>
          <MyRoute exact path="/home" component={Home}></MyRoute>
          <MyRoute exact path="/about" render={() => <About></About>}></MyRoute>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

function Home() {
  return <h1>HOME</h1>;
}

function About() {
  return <h1>ABOUT</h1>;
}