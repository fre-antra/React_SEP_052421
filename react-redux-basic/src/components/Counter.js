import React from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import {counterActions} from '../store/index'
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const increHandler = () => {
    // dispatch({ type: 'increment' })
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    // dispatch({ type: 'increase', payload: 5 })
    dispatch(counterActions.increase(5))
  }

  const decreHandler = () => {
    // dispatch({ type: 'decrement' })
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' })
    dispatch(counterActions.toggle())
  };

  return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
          <button onClick={increHandler}>+</button>
          <button onClick={increaseHandler}>+5</button>
          <button onClick={decreHandler}>-</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
  );
};

export default Counter;

// class Counter extends React.Component {

//   increHandler = () => {
//     this.props.increment();
//   }

//   decreHandler = () => {
//     this.props.decrement();
//   }

//   toggleCounterHandler = () => {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.increHandler}>+</button>
//           <button onClick={this.decreHandler}>-</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);