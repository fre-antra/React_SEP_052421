import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import TodoList from "./components/TodoList/TodoList";
import Dashborad from "./components/Dashboard/Dashboard";
// import { withTodos } from './hoc/withTodos';
import WithTodoData from "./components/WithTodosData/WithTodosData";

class App extends React.Component {
  state = {
    activePage: "TodoList",
  };

  handleChangeActivePage = (newActivePage) => {
    this.setState({
      activePage: newActivePage,
    });
  };

  render() {
    let content = null;
    switch (this.state.activePage) {
      case "Dashboard":
        content = (
          <WithTodoData
            renderHeader={(headerTitle) => <header>{headerTitle}</header>}
            render={(_, __, todolist) => <Dashborad todolist={todolist}></Dashborad>}
          ></WithTodoData>
        );
        break;
      case "TodoList":
        content = (
          <WithTodoData>
            {(removeTodo, addTodo, todolist) => (
              <TodoList
                todolist={todolist}
                handleRemoveTodo={removeTodo}
                HandleAddTodo={addTodo}
              ></TodoList>
            )}
          </WithTodoData>
        );
        break;
      default:
        break;
    }

    return <Layout handleChangeActivePage={this.handleChangeActivePage}>{content}</Layout>;
  }
}

export default App;
