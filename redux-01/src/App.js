import './App.css';
import { Provider } from 'react-redux';
import { MyProvider } from './Redux/react-redux';
import { myStore, store } from './Redux/redux';

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
import Counter13 from './components/Counter13';
import Counter14 from './components/Counter14';
import Counter15 from './components/Counter15';

function App() {
  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <Counter4 />
      <Counter5 />
      <Counter6 />

      <Counter8 />
      <Counter9 />
      <Counter10 />
      <Counter11 />
      <Provider store={store}>
        <Counter12 />
      </Provider>
      <MyProvider store={store}>
        <Counter14 />
      </MyProvider>
      <MyProvider store={myStore}>
        <Counter15 />
      </MyProvider>
      <Counter7 />
      <Provider store={myStore}>
        <Counter13 />
      </Provider>
    </div>
  );
}

export default App;
