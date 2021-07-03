import React, { useEffect, useContext, useState } from 'react';

const ReduxStoreContext = React.createContext({});

function useForceUpdate() {
  const [booleanValue, toggleBooleanValue] = useState(false); // boolean state
  console.log('forceUpdate Hook get called', booleanValue);
  return () => {
    toggleBooleanValue(preState => !preState);
  }; // update the state to force render
}

const useForceUpdateWith = (subscribe) => {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    const unsubcribe = subscribe(() => {
      forceUpdate();
    });
    return () => {  // when component willUnmount, unsubcribe listeners.
      unsubcribe();
    };
    // return unsubcribe;  // this should work too
  }, []);
};

export const useDispatch = () => {
  const { dispatch, subscribe } = useContext(ReduxStoreContext);
  useForceUpdateWith(subscribe);
  return dispatch;
};

export const useSelector = (mapStateFn) => {
  const { getState, subscribe } = useContext(ReduxStoreContext);
  useForceUpdateWith(subscribe);
  return mapStateFn(getState());
};

// By using useDispatch and useSelector, we still need Provider to provide store in context.
export const MyProvider = ({ store, children }) => {
  return (
    <ReduxStoreContext.Provider value={store}>
      {children}
    </ReduxStoreContext.Provider>
  );
};

// <--------------------------------------------------------------->











// By using useDispatch and useSelector, we don't need to use connect()().

// connect()() is a curried function, it returns a anonymous function.
export function myConnect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
  return function (WrappedComponent) {
    return function ConnectedComponent(props) {
      const store = useContext(ReduxStoreContext); // way to access context data in functional Component.
      const forceUpdate = useForceUpdate();

      useEffect(() => {
        console.log('useEffect');
        const { subscribe } = store; // destructuring store in our context.
        subscribe(() => {
          forceUpdate();
        });
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

