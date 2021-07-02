import React, { useEffect, useContext, useState } from 'react';

const ReduxStoreContext = React.createContext({});

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  console.log('stateCountValue', value);
  return [value, () => setValue(value => value + 1)]; // update the state to force render
}

export const MyProvider = ({ store, children }) => {
  return (
    <ReduxStoreContext.Provider value={store}>
      {children}
    </ReduxStoreContext.Provider>
  );
};

// connect()() is a curried function, it returns a anonymous function.
export function myConnect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
  return function (WrappedComponent) {
    return function ConnectedComponent(props) {
      const store = useContext(ReduxStoreContext); // way to access context data in functional Component.
      const [counter, forceUpdate] = useForceUpdate();

      useEffect(() => {
        console.log('useEffect');
        const { subscribe } = store; // destructuring store in our context.
        subscribe(() => { forceUpdate(); });
      }, []);

      const { getState, dispatch } = store;
      const stateAsProps = mapStateToProps(getState()); // we need state as argument, so we call getState().
      const dispatchAsProps = mapDispatchToProps(dispatch); // we need dispatch function itself, so we don't need to call it.
      // mapDispatchToProps & mapStateToProps are defined in the component we use connect()().
      console.log('context', store);

      return (
        <WrappedComponent {...props} {...stateAsProps} {...dispatchAsProps} />
      );
    };
  };
}

