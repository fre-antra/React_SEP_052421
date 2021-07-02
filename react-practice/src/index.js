import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { MyProvider, store, MyCounter } from './ReactRedux/ReactRedux'

ReactDOM.render(
  <MyProvider store={store}>
    <MyCounter />
  </MyProvider>,
  document.getElementById('root')
)
