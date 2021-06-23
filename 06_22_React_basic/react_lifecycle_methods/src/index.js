import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ParentComponent from './constructor&render&didMount';
import App from './didUpdate&willUnmount';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

