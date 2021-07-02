import React from 'react'
import { createStore } from 'redux'

const MyReactContextRedux = React.createContext({})

// export class MyProvider extends React.Component {
//   render() {
//     console.log('store from provider', this.props.store)
//     return (
//       <MyReactContextRedux.Provider value={this.props.store}>
//         {this.props.children}
//       </MyReactContextRedux.Provider>
//     )
//   }
// }

// export const myConnect = (mapStateToProps, mapDispatchToProps) => {
//   return OriginalComponent => {
//     return class NewComponent extends React.Component {
//       static contextType = MyReactContextRedux

//       componentDidMount() {
//         const { subscribe } = this.context
//         subscribe(() => this.forceUpdate())
//       }
//       render() {
//         const { getState, dispatch } = this.context
//         const stateprops = mapStateToProps(getState())

//         const handleAddandSubProps = mapDispatchToProps(dispatch)

//         console.log('context', this.context)

//         return (
//           <OriginalComponent
//             {...this.props}
//             {...stateprops}
//             {...handleAddandSubProps}
//           ></OriginalComponent>
//         )
//       }
//     }
//   }
// }

const myReducer = (state = { value: 10 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1,
      }
    default:
      return state
  }
}

// export let store = createStore(myReducer)

const myCreateStore = myReducer => {
  let state,
    myListner = []
  state = myReducer(state, { type: '__INIT__' })
  const myGetState = () => state
  const myDispatch = action => {
    state = myReducer(state, action)
    myListner.forEach(cb => cb())
  }
  const mySubscribe = cb => {
    myListner.push(cb)
  }
  return {
    myGetState,
    myDispatch,
    mySubscribe,
  }
}

const myStore = myCreateStore(myReducer)
console.log('myStore', myStore)
console.log('myGetState', myStore.myGetState())
myStore.mySubscribe(() => {
  console.log('My subscribe get state:', myStore.myGetState())
})

const INCREMENT = { type: 'INCREMENT' }
const DECREMENT = { type: 'DECREMENT' }
myStore.myDispatch(INCREMENT)
myStore.myDispatch(INCREMENT)
myStore.myDispatch(DECREMENT)
myStore.mySubscribe(() => {
  console.log('My subscribe 22 get state:', myStore.myGetState())
})
myStore.myDispatch(INCREMENT)
myStore.myDispatch(INCREMENT)
myStore.myDispatch(INCREMENT)
myStore.myDispatch(INCREMENT)
