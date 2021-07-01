import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import Counter from "./redux/Counter";
import {store} from "./redux/Redux";
import {Provider} from "react-redux";

// 用useRef也能解决这个问题 两种方式
// const xxx = useRef(0)
// xxx.current = counter
// 然后alert xxx.current
let counterRef = 0
const FcCounter = () => {
  const [counter, setCounter] = React.useState(0)
  counterRef = counter

  const handleShowCounter = () => {
    setTimeout(() => {
      // 点按钮之后 +几次就会alert几
      alert(counterRef)
    }, 3000)
  }
  return (
      <>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={handleShowCounter}>Show Counter after 3 seconds</button>
      </>
  )
}

ReactDOM.render(
    <Provider store={store}>
      <Counter/>
      <Counter/>
      {/*<App1/>*/}
    </Provider>,
    document.getElementById('root')
);