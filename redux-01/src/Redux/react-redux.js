import React, { Component, useState, useEffect } from 'react';
const MyReactReduxContext = React.createContext({});

export class MyProvider extends Component {
  render() {
    return (
      <MyReactReduxContext.Provider value={this.props.store}>
        {this.props.children}
      </MyReactReduxContext.Provider>
    );
  }
}

export function myConnect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class NewCompnnent extends Component {
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

const useForceUpdate = () => {
  // eslint-disable-next-line
  const [update, setUpdate] = useState([]);
  return () => setUpdate([]);
};

export function useMySelector(mapStateFn) {
  const { getState, subscribe } = React.useContext(MyReactReduxContext);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const unsub = subscribe(() => {
      forceUpdate();
    });
    return () => {
      unsub();
    };
    // eslint-disable-next-line
  }, []);

  return mapStateFn(getState());
}

export const useMyDispatch = () => {
  const { dispatch, subscribe } = React.useContext(MyReactReduxContext);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const unsub = subscribe(() => {
      forceUpdate();
    });
    return () => {
      unsub();
    };
    // eslint-disable-next-line
  }, []);

  return dispatch;
};
