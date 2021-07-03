//  Action types
const COUNTER_INCREMENTED = 'counter/incremented';
const COUNTER_DECREMENTED = 'counter/decremented';

// Action Creator
const handleAdd = () => { // define an action function can handle async operations in the future, it returns an action object.
  return {
    type: COUNTER_INCREMENTED
  };
};

const handleSub = () => {
  return {
    type: COUNTER_DECREMENTED
  };
};

export const actionCreator = {  // export actionCreator containing all action functions
  handleAdd,
  handleSub
};

// reducer
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case COUNTER_INCREMENTED:
      return { value: state.value + 1 };
    case COUNTER_DECREMENTED:
      return { value: state.value - 1 };
    default:
      return state; // even if state doesn't change, a new state will still be returned.
  }
}


// use reducer to create store
export const myStore = myCreateStore(counterReducer);

function myCreateStore(reducer) {
  let listeners = [];
  let state;
  state = reducer(state, { type: '__init__' }); // if no case matches, default case will be returned.

  function getState() {
    return state;
  }

  function subscribe(subscribeCallback) {
    listeners.push(subscribeCallback);
    return () => {
      listeners = listeners.filter(cb => cb !== subscribeCallback);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

