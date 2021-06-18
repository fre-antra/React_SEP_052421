import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';

console.log('index file');

ReactDOM.render(
  React.createElement(HelloMessage, {
    name: 'Taylor',
  }),
  document.getElementById('root')
);
