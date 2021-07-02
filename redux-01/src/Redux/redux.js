import { createStore } from 'redux';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export let store = createStore(counterReducer);

// --- my store

function myCreateStore(reducer) {
  let state;
  let listener = [];
  state = reducer(state, { type: 'init' });

  function getState() {
    return state;
  }

  function subscribe(cb) {
    listener.push(cb);
    // console.log(listener,'=====>');
  }

  function dispatch(action) {
    state = reducer(state, action);
    listener.forEach((cb) => {
      cb();
    });
  }

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export let myStore = myCreateStore(counterReducer);
