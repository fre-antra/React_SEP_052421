const redux = require('redux')

const createStore = redux.createStore

console.log('createStore')
console.log(createStore)

const initialState = {
  count: 10,
}

// Actions
const INCREMENT_COUNT = 'INCREMENT_COUNT'

const Increment_Count = () => ({
  type: INCREMENT_COUNT,
})

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      }

    default:
      return state
  }
}

const store = createStore(reducer)

console.log('Store initial state:', store.getState())
const unsubscribe = store.subscribe(() =>
  console.log('Updated state:', store.getState())
)

store.dispatch(Increment_Count())
store.dispatch(Increment_Count())
unsubscribe()
