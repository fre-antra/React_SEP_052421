import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

ReactDOM.render(
  React.createElement(App, {
    message:
      '< Html + React + Webpack + JSX + Babel-loader + CSS-loader + Plugin +  webpack server & proxy + webpack async >',
  }),
  document.getElementById('root')
);
