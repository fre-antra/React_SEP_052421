import "./App.css";
// import Header from "./classComponent/Header/Header";
// import TodoList from './classComponent/TodoList/TodoList'

import Header from "./fnComponent/Header/Header";
import TodoList from './fnComponent/TodoList/TodoList'

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main className='content'>
        <TodoList />
      </main>
    </>
  );
}

export default App;
