import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

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

// Action type
const COUNTER_INCREMENTED = "counter/incremented";
const COUNTER_DECREMENTED = "counter/decremented";

// Action Creator
const counterAdd = () => async (dispatch) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/1`
  );
  dispatch({
    type: COUNTER_INCREMENTED,
    payload: data,
  });
  //   return {
  //     type: COUNTER_INCREMENTED,
  //   };
};
const counterSub = () => async (dispatch) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/1`
  );
  dispatch({
    type: COUNTER_DECREMENTED,
    payload: data,
  });
  //   return {
  //     type: COUNTER_DECREMENTED,
  //   };
};

const counterAddAfter3S = () => {
  setTimeout(() => {
    return {
      type: COUNTER_INCREMENTED,
    };
  }, 3000);
};

export const actionCreater = {
  counterAdd,
  counterSub,
};

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case COUNTER_INCREMENTED:
      console.log(action.payload);
      return { value: state.value + 1 };
    case COUNTER_DECREMENTED:
      console.log(action.payload);
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// let store = createStore(counterReducer);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "counter/incremented" });
// store.dispatch({ type: "counter/incremented" });
// store.dispatch({ type: "counter/decremented" });
// store.dispatch({ type: "counter/decremented" });

//Custom myCreateStore
export const myStore = myCreateStore(counterReducer);
export const store = createStore(counterReducer, applyMiddleware(thunk));

function myCreateStore(reducer) {
  let listeners = [];
  let state;
  state = reducer(state, { type: "___INIT___" });

  function getState() {
    return state;
  }

  function subscribe(subCallback) {
    listeners.push(subCallback);
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listerner) => listerner());
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}
