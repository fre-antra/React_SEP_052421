// import { createStore } from 'redux'

// function counterReducer(state = { value: 0 }, action) {
//   switch (action.type) {
//     case 'counter/incremented':
//       return { value: state.value + 1 }
//     case 'counter/decremented':
//       return { value: state.value - 1 }
//     default:
//       return state
//   }
// }

// let store = createStore(counterReducer)

// store.subscribe(() => console.log(store.getState()))

// store.dispatch({ type: 'counter/incremented' });
// {value: 1}
// store.dispatch({ type: 'counter/incremented' });
// {value: 2}
// store.dispatch({ type: 'counter/decremented' });
// {value: 1}

// --- my store
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

function myCreateStore(reducer) {
  let state;
  let listener = [];
  state = reducer(state, { type: 'init' });

  function getState() {
    return state;
  }

  function subscribe(cb) {
    listener.push(cb);
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

let myStore = myCreateStore(counterReducer);
// myStore.subscribe(() => console.log(myStore.getState()));

// myStore.dispatch({ type: 'counter/incremented' });
// {value: 1}
// myStore.dispatch({ type: 'counter/incremented' });
// {value: 2}
// myStore.dispatch({ type: 'counter/decremented' });
// {value: 1}

export default myStore;
