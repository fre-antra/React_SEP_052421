import './App.css';
import { Provider } from 'react-redux';
import { store } from './Redux/redux';

import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Counter4 from './components/Counter4';
import Counter5 from './components/Counter5';
import Counter6 from './components/Counter6';
import Counter7 from './components/Counter7';
import Counter8 from './components/Counter8';
import Counter9 from './components/Counter9';
import Counter10 from './components/Counter10';
import Counter11 from './components/Counter11';
import Counter12 from './components/Counter12';

function App() {
  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <Counter4 />
      <Counter5 />
      <Counter6 />
      <Counter7 />
      <Counter8 />
      <Counter9 />
      <Counter10 />
      <Counter11 />
      <Provider store={store}>
        <Counter12 />
      </Provider>
    </div>
  );
}

export default App;
