import React from 'react';
import ReactDOM from 'react-dom';

import MyImage from '../assets/loki.png';
import './index.css';

const App = () => {
  return (
    <div>
      <h2>Welcome to React-01</h2>
      <img src={MyImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
