import './App.css';
import Layout from "./components/Layout/Layout";
import TodoList from "./components/TodoList/TodoList";
import Dashboard from "./components/Dashboard/Dashboard";
import React, {useState} from 'react';

function App() {
  const [content, setContent] = useState(null);
  const handleNav = (e)=> {
    // console.log(e.target.innerHTML)
    let content = null;
    switch (e.target.innerHTML) {
      case 'DashBoard':
        setContent(<Dashboard />);
        break;
      case 'TodoList' :
        setContent(<TodoList />);
        break;
      default:
        break;
    }
    return content;
    // if(e.target.innerHTML === 'DashBoard') {
    //   setIsDashboard(true)
    // } else {
    //   setIsDashboard(false);
    // }
  }
  return (
    <Layout handleNav={handleNav}>
      {content}
    </Layout>
  );
}

export default App;
