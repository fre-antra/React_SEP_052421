import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/hello-message';

ReactDOM.render(
    React.createElement(HelloMessage, {
        message: '< Html + React + Webpack >',
    }),
    document.getElementById('root')
);