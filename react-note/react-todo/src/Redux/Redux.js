// import { createStore } from "redux";
const { createStore } = require("redux");

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

// Action Type
const COUNTER_INCREMENTED = "counter/incremented";
const COUNTER_DECREMENTED = "counter/decremented";

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

const counterAddAfter = () => {
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

// pure function
function counterReducer(state = { value: 50 }, action) {
  switch (action.type) {
    case COUNTER_INCREMENTED:
      return { value: state.value + 1 };
    case COUNTER_DECREMENTED:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export let store = createStore(counterReducer);

export const myStore = myCreateStore(counterReducer);
myStore.subscribe(() => {
  console.log(myStore.getState());
});

function myCreateStore(reducer) {
  let listeners = [];
  let state;
  state = reducer(state, { type: "___INIT___" });

  function getState() {
    return state;
  }

  function subscribe(subCallback) {
    listeners.push(subCallback);
    return () => {
      listeners = listeners.filter((cb) => cb !== subCallback);
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

// myStore.subscribe(() => console.log(myStore.getState()));
// myStore.subscribe(() => console.log("hello"));
// myStore.dispatch({ type: "counter/decremented" });
// myStore.dispatch({ type: "counter/decremented" });
// myStore.dispatch({ type: "counter/decremented" });
// console.log(myStore.getState());

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

// store.subscribe(() => console.log(store.getState()));
// store.subscribe(() => console.log("hello"));

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: "counter/incremented" });
// // {value: 1}
// store.dispatch({ type: "counter/incremented" });
// // {value: 2}
// store.dispatch({ type: "counter/decremented" });
// // {value: 1}

// function foo(num) {
//   return foo2(num); // side effect => you can't control/ no idea about foo() since it relies on foo2()
// }

// // pure function: no side effect, same input same output, data is immutable
// function foo2(num) {
//   return num;
// }

// foo(5);
// foo2(5);

// // not pure function
// function foo(obj) {
//   obj.name = "patrick"; // mutable
//   return obj;
// }

// // pure function
// function foo2(obj) {
//   return {
//     ...obj, // shallow copy
//     name: "patrick", // immutable
//   };
// }
