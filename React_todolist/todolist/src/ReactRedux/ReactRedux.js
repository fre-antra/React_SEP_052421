import React, { createContext, useContext, useEffect, useState } from 'react';

const MyReactReduxContext = createContext();

export function MyProvider(props) {
  return (
    <MyReactReduxContext.Provider value={props.store}>
      {props.children}
    </MyReactReduxContext.Provider>
  );
}

export function myConnect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return function (props) {
      const { getState, subscribe, dispatch } = useContext(MyReactReduxContext);
      const [update, setUpdate] = useState(true);

      const passStateToProps = mapStateToProps(getState());
      const passDispatchToProps = mapDispatchToProps(dispatch);

      useEffect(() => {
        subscribe(() =>
          setUpdate((preState) => {
            return !preState;
          })
        );
      }, []);

      return (
        <WrappedComponent
          {...props}
          {...passStateToProps}
          {...passDispatchToProps}
        ></WrappedComponent>
      );
    };
  };
}
