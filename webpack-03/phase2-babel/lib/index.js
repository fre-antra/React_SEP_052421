import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';
ReactDOM.render( /*#__PURE__*/React.createElement(HelloMessage, {
  message: '< Html + React + Webpack + Babel(JSX) >'
}), document.getElementById('root'));