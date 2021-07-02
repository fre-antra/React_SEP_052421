import React from 'react';

const ReduxStoreContext = React.createContext({});

export class MyProvider extends React.Component {
  render() {
    return (
      <ReduxStoreContext.Provider value={this.props.store}>
        {this.props.children}
      </ReduxStoreContext.Provider>
    );
  }
}

// connect()() is a curried function, it returns a anonymous function.
export function myConnect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
  return function (WrappedComponent) {
    return class ConnectedComponent extends React.Component {
      static contextType = ReduxStoreContext; // way to access context data.

      componentDidMount() {
        const { subscribe } = this.context; // destructuring store in our context.
        subscribe(() => this.forceUpdate());
      }

      render() {
        const { getState, dispatch } = this.context;

        const stateAsProps = mapStateToProps(getState()); // we need state as argument, so we call getState().
        const dispatchAsProps = mapDispatchToProps(dispatch); // we need dispatch function itself, so we don't need to call it.
        // mapDispatchToProps & mapStateToProps are defined in the component we use connect()().
        console.log('context', this.context);

        return (
          <WrappedComponent {...this.props} {...stateAsProps} {...dispatchAsProps} />
        );
      };
    };
  };
}

