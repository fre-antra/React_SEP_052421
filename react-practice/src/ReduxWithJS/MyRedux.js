// Reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'sub':
      return {
        ...state,
        count: state.count - 1,
      }

    default:
      return state
  }
}

// My Store
const myCreateStore = reducer => {
  let state, listner

  state = reducer(state, { type: '__INIT__' })
  console.log('state', state)
  const myGetState = () => {
    return state
  }

  const myDispatch = action => {
    state = reducer(state, action)
    listner()
  }
  const mySubscribe = cb => {
    listner = cb
  }
  return {
    myGetState,
    myDispatch,
    mySubscribe,
  }
}
// Actions
const ADD = 'ADD'

const Add = () => ({
  type: ADD,
})

const mystore = myCreateStore(reducer)
console.log(mystore)
console.log('getstate', mystore.myGetState())
mystore.mySubscribe(() => {
  console.log('Get subscribed state:', mystore.myGetState())
})

mystore.myDispatch(Add())
mystore.myDispatch(Add())
mystore.myDispatch(Add())
mystore.myDispatch(Add())
