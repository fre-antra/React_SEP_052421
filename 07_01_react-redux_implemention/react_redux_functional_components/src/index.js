import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MyProvider } from './react-redux/react-redux';
import { myStore, store } from './redux/Redux';

// Provider must warp components that need store.
ReactDOM.render(
  <React.StrictMode>
    <MyProvider store={myStore}>
      <App name={'A'} />
      <App name={'B'} />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

