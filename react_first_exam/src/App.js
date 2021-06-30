import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import LayoutProvider from './components/LayoutProvider';

function App() {
  return (
    <div className='App'>
      <LayoutProvider>
        <Header />
        <Main />
      </LayoutProvider>
    </div>
  );
}

export default App;
