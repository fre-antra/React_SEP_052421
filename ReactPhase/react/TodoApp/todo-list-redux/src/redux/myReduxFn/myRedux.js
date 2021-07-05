
/******************     My version     ****************/
// store (3/5): 
// getState: allows return states when it called
//           store.getState();
// dispatch: allows to update states using reducer((state, action) => newState)
//           store.dispatch(action);
// subscribe: register listener callback
//           store.subscribe(listener);

// state; action; reducer;
// action initial
const COUNTER_INCREMENTED = 'counter/incremented';
const COUNTER_DECREMENTED = 'counter/decremented';
const initalState = { value: 0 }

// action creator
const counterAdd = () => {
  return {type:COUNTER_INCREMENTED}
}
const counterSub = () => {
  return {type:COUNTER_DECREMENTED}
}
export const actionCreator = {
  counterAdd, counterSub
}

// reducer
function myReducers(state=initalState, action) {
  switch (action.type) {
    case COUNTER_INCREMENTED:
      return {value: state.value + 1 }
    case COUNTER_DECREMENTED:
      return { value:  state.value  - 1 }
      
    default:
      return state;
  }
}

// store: getState, dispathch, subscribe
export const selfStore = selfCreateStore(myReducers)
  
function selfCreateStore(myReducers) {
  let listeners = []
  let state;
  state = myReducers(state, { type: '____INIT____' });
  
  // return state
  function getState() {
      return state
  }
  
  //subscribe
  function subscribe(subCallback) {
    listeners.push(subCallback)
    // 用完删掉这个callback（listener）
    return function unsubscribe() {
      const index = listeners.indexOf(subCallback)
      listeners.splice(index,1)
    }
  }

  // dispatch action
  function dispatch(action) {
    state = myReducers(state, action)
    console.log(listeners, state);
    listeners.forEach(listener => listener())
  }


  return {
    getState,
    dispatch,
    subscribe
  }
}



/******************     Lecture version     ****************/

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
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.


// let store = createStore(counterReducer); // native store

export const myStore = myCreateStore(counterReducer);

function myCreateStore(reducer) {
  let listeners = [];
  let state;
  state = reducer(state, { type: '____INIT____' });
  function getState() {
    return state;
  }
  function subscribe(subCallback) {
      listeners.push(subCallback);
      console.log(listeners);
    }
  function dispatch(action) {
      state = reducer(state, action);
      console.log(listeners, state);
    listeners.forEach((listener) => listener());
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}