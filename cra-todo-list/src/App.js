import React, { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import TodoList from "./Components/TodoList/TodoList";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const [activePage, setActivePage] = useState("todolist");

  if (activePage === "todolist") {
    var content = <TodoList />;
  } else {
    content = <Dashboard />;
  }

  const handleChangeActivePage = (activePage) => {
    setActivePage(activePage);
  };
  return (
    <Layout handleChangeActivePage={handleChangeActivePage}>{content}</Layout>
  );
}

export default App;
