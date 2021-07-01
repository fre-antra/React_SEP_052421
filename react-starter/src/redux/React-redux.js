import React from "react";

const MyReactReduxContext = React.createContext({});

export class MyProvider extends React.Component {
  render() {
    return (
        <MyReactReduxContext.Provider value={this.props.store}>
          {this.props.children}
        </MyReactReduxContext.Provider>
    )
  }
}

export const myConnect = (mapStateToProps, mapDispatchToProps) => {
  return WrappedComponent => {
    return class extends React.Component {
      static contextType = MyReactReduxContext;

      componentDidMount() {
        const {subscribe} = this.context;
        subscribe(() => this.forceUpdate());
      }

      render() {
        const {getState, dispatch} = this.context;
        const passStateToProps = mapStateToProps(getState());
        const passDispatchToProps = mapDispatchToProps(dispatch);
        return (
            <WrappedComponent
                {...this.props}
                {...passStateToProps}
                {...passDispatchToProps}
            />
        )
      }
    }
  }
}