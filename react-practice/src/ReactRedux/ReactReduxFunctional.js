import React, { useContext, useState, useEffect } from 'react'
import { createStore } from 'redux'

const MyReactContextRedux = React.createContext({})

export const MyProvider = props => {
  console.log('store from provider', props.store)
  return (
    <MyReactContextRedux.Provider value={props.store}>
      {props.children}
    </MyReactContextRedux.Provider>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.value,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAdd: () => dispatch({ type: 'INCREMENT' }),
    handleSub: () => dispatch({ type: 'DECREMENT' }),
  }
}

const Counter = props => {
  const handleAdd = () => {
    props.handleAdd()
  }
  const handleSub = () => {
    props.handleSub()
  }

  console.log('counter', props.counter)

  return (
    <>
      <h1>Counter:{props.counter}</h1>
      <h2>Name:{props.name}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <h1>hello</h1>
    </>
  )
}

const myConnect = (mapStateToProps, mapDispatchToProps) => {
  return OriginalComponent => {
    return props => {
      const [state, setstate] = useState(Boolean)
      console.log(state)
      const { getState, dispatch, subscribe } = useContext(MyReactContextRedux)

      useEffect(() => {
        subscribe(() => setstate(prevState => !prevState))
      }, [])
      const stateprops = mapStateToProps(getState())
      const handleAddandSubProps = mapDispatchToProps(dispatch)
      console.log('myConnext from props', props)
      console.log('myConnext from stateprops', stateprops)
      console.log('myConnext from handleAddandSubProps', handleAddandSubProps)
      return (
        <OriginalComponent
          {...props}
          {...stateprops}
          {...handleAddandSubProps}
        ></OriginalComponent>
      )
    }
  }
}

export const MyCounter = myConnect(mapStateToProps, mapDispatchToProps)(Counter)

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

export let store = createStore(myReducer)
