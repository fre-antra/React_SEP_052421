import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/config';
import { BrowserRouter as Router,  Route} from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}>
    <Router>

      <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);

