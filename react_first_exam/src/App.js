import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import LayoutProvider from './components/LayoutProvider';

export default function App() {
  return (
    <div className='App'>
      <LayoutProvider>
        <Header />
        <Main />
      </LayoutProvider>
    </div>
  );
}
