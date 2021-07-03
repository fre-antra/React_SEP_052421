import { createStore } from 'redux';

function counterReducer1(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export let store = createStore(counterReducer1);

// --- my store
let initialState = {
  value: 100,
};
function counterReducer2(state = initialState, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

function myCreateStore(reducer) {
  let state;
  let listeners = [];
  state = reducer(state, { type: '' });

  function getState() {
    return state;
  }

  function subscribe(cb) {
    listeners.push(cb);
    return () => {
      listeners = listeners.filter((item) => item !== cb);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((cb) => {
      cb();
    });
  }

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export let myStore = myCreateStore(counterReducer2);
