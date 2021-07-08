import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import Dashborad from './components/Dashboard/Dashboard';
import WithTodosData from './components/WithTodosData/WithTodosData';

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
    let content = null;
    switch (this.state.activePage) {
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
      <Layout handleChangeActivePage={this.handleChangeActivePage}>
        {content}
      </Layout>
    );
  }
}

export default App;
