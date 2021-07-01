import React from 'react';

const MyReactReduxContext = React.createContext({});

export class MyProvider extends React.Component {
  render() {
    return (
      <MyReactReduxContext.Provider value={this.props.store}>
        {this.props.children}
      </MyReactReduxContext.Provider>
    );
  }
}

//const MyCounter = myConnect(mapStateToProps, mapDispatchToProps)(Counter);

export function myConnect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class NewComponent extends React.Component {
      static contextType = MyReactReduxContext;
      componentDidMount() {
        const { subscribe } = this.context;
        subscribe(() => this.forceUpdate());
      }
      render() {
        const { getState, dispatch, subscribe } = this.context;

        const passStateToProps = mapStateToProps(getState());
        const passDipatchToProps = mapDispatchToProps(dispatch);
        console.log('context', this.context);
        return (
          <WrappedComponent
            {...this.props}
            {...passStateToProps}
            {...passDipatchToProps}
          ></WrappedComponent>
        );
      }
    };
  };
}
