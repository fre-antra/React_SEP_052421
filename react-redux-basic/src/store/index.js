import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counter: 0, showCounter: true},
  // 自动immutablly动state
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      // 那边直接传个5 这默认也会.payload那找
      state.counter = state.counter + action.payload
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    }
  }
})

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === 'increment') {
//     return {
//       ...state,
//       counter: state.counter + 1
//     }
//   }

//   if (action.type === 'increase') {
//     return {
//       ...state,
//       counter: state.counter + action.payload,
//     }
//   }

//   if (action.type === 'decrement') {
//     return {
//       ...state,
//       counter: state.counter - 1
//     }
//   }

//   if (action.type === 'toggle') {
//     return {
//       ...state,
//       showCounter: !state.showCounter
//     }
//   }

//   return state;
// }

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;