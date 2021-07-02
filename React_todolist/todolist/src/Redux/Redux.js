// const { createStore } = require('redux');

function counterReducer(state = { value: 0 }, action) {
  console.log('call reducer: ' + action.type);

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
  let listeners = [];
  let state;

  state = reducer(state, { type: '___INIT___' });

  console.log('Init state: ' + state.value);

  function getState() {
    return state;
  }

  function subscribe(subCallback) {
    listeners.push(subCallback);
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => {
      console.log(listener);
      listener();
    });
  }

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export const myStore = myCreateStore(counterReducer);

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// let store = createStore(counterReducer);

// export const myStore = myCreateStore(counterReducer);

// function myCreateStore(reducer) {
//   let listeners = [];
//   let state;
//   state = reducer(state, { type: '____INIT____' });
//   function getState() {
//     return state;
//   }
//   function subscribe(subCallback) {
//     listeners.push(subCallback);
//     console.log(
//       'Subscribe push listener! listeners.length = ' + listeners.length
//     );
//   }
//   function dispatch(action) {
//     state = reducer(state, action);
//     listeners.forEach((listener) => listener());
//   }

//   return {
//     getState,
//     dispatch,
//     subscribe,
//   };
// }
