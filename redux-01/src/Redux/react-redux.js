import React, { Component } from 'react';
const MyReactReduxContext = React.createContext({});

export class MyProvider extends Component {
  render() {
    return (
      <MyReactReduxContext value={this.props.store}>
        {this.props.children}
      </MyReactReduxContext>
    );
  }
}

export function myConnect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class NewCompnnent extends React.Component {
      static contextType = MyReactReduxContext;

      componentDidMount() {
        const { subscribe } = this.context;
        subscribe(() => this.forceUpdate());
      }
      render() {
        const { getState, dispatch } = this.context;
        const msp = mapStateToProps(getState());
        const mdp = mapDispatchToProps(dispatch);
        
        return <WrappedComponent {...this.props} {...msp} {...mdp} />;
      }
    };
  };
}
