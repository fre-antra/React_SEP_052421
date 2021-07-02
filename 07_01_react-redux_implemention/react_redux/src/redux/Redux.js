const { createStore } = require('redux');

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state; // even if state doesn't change, a new state will still be returned.
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

export const store = createStore(counterReducer);

export const myStore = myCreateStore(counterReducer);

function myCreateStore(reducer) {
  let listeners = [];
  let state;
  state = reducer(state, { type: '__init__' }); // if no case matches, default case will be returned.

  function getState() {
    return state;
  }

  function subscribe(subCallback) {
    listeners.push(subCallback);
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

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.

// pure function : no side effect, same input same ouput, data is imuteable
