import './App.css';
import Header from './FC/Header/Header';
import TodoList from './FC/TodoList/TopdoList';

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main className="content">
        <TodoList />
      </main>
    </>
  );
}

export default App;
