import React from 'react'
import { createStore } from 'redux'

const MyReactContextRedux = React.createContext({})

export class MyProvider extends React.Component {
  render() {
    console.log('store from provider', this.props.store)
    return (
      <MyReactContextRedux.Provider value={this.props.store}>
        {this.props.children}
      </MyReactContextRedux.Provider>
    )
  }
}

export const myConnect = (mapStateToProps, mapDispatchToProps) => {
  return OriginalComponent => {
    return class NewComponent extends React.Component {
      static contextType = MyReactContextRedux

      componentDidMount() {
        const { subscribe } = this.context
        subscribe(() => this.forceUpdate())
      }
      render() {
        const { getState, dispatch } = this.context
        const stateprops = mapStateToProps(getState())

        const handleAddandSubProps = mapDispatchToProps(dispatch)

        return (
          <OriginalComponent
            {...this.props}
            {...stateprops}
            {...handleAddandSubProps}
          ></OriginalComponent>
        )
      }
    }
  }
}

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

class Counter extends React.Component {
  handleAdd = () => {
    this.props.handleAdd()
  }
  handleSub = () => {
    this.props.handleSub()
  }

  render() {
    console.log('counter', this.props.counter)

    return (
      <>
        <h1>Counter:{this.props.counter}</h1>
        <h2>Name:{this.props.name}</h2>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Sub</button>
        <h1>hello</h1>
      </>
    )
  }
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

export const MyCounter = myConnect(mapStateToProps, mapDispatchToProps)(Counter)
