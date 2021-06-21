import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/hello-message';

import './index.css';

ReactDOM.render(
    React.createElement(HelloMessage, {
        message: '< Html + React + Webpack + Babel-loader + css-loader + plugin>',
    }),
    document.getElementById('root')
);