import './App.css';
import Layout from "./components/Layout/Layout";
import TodoList from "./components/TodoList/TodoList";
import Dashboard from "./components/Dashboard/Dashboard";
import React, {useState} from 'react';

function App() {
  const [isDashboard, setIsDashboard] = useState(true)
  const handleNav = (e)=> {
    // console.log(e.target.innerHTML)
    if(e.target.innerHTML === 'DashBoard') {
      setIsDashboard(true)
    } else {
      setIsDashboard(false);
    }
  }
  return (
    <Layout handleNav={handleNav}>
      {isDashboard ? <Dashboard /> : <TodoList />}
    </Layout>
  );
}

export default App;
