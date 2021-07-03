const {createStore} = require('redux');

// Action type
const COUNTER_INCREMENTED = 'counter/incremented';
const COUNTER_DECREMENTED = 'counter/decremented';

// Action Creator
const counterAdd = () => {
  return {
    type: COUNTER_INCREMENTED,
  };
};
const counterSub = () => {
  return {
    type: COUNTER_DECREMENTED,
  };
};

const counterAddAfter3S = () => {
  setTimeout(() => {
    return {
      type: COUNTER_INCREMENTED,
    };
  }, 3000);
};

export const actionCreator = {
  counterAdd,
  counterSub,
};

function counterReducer(state = {value: 0}, action) {
  switch (action.type) {
    case 'counter/incremented':
      return {value: state.value + 1};
    case 'counter/decremented':
      return {value: state.value - 1};
    default:
      return state;
  }
}

function myCreateStore(reducer) {
  let listeners = [];
  let state;
  state = reducer(state, {type: '___INIT___'});

  function getState() {
    return state;
  }

  function subscribe(cb) {
    listeners.push(cb);
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(x => x());
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

export const myStore = myCreateStore(counterReducer);
export const store = createStore(counterReducer)