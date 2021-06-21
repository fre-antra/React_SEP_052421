import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/hello-message';
ReactDOM.render( /*#__PURE__*/React.createElement(HelloMessage, {
  message: '< Html + React + Webpack + Babel(jsx)>'
}), document.getElementById('root'));