import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from '../components/HelloMessage';

ReactDOM.render(
    React.createElement(HelloMessage, {
        name: 'Taylor'
    }, null),
    document.getElementById('root')
);