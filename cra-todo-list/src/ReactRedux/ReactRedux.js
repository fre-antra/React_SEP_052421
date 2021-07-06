import React from "react";

const MyReactReduxContext = React.createContext({});

const useForceUpdate = () => {
  const [_, setUpdate] = React.useState(false);
  return () => {
    setUpdate((pre) => !pre);
  };
};

const useForceUpdateWith = (subscribeFn) => {
  const forceUpdate = useForceUpdate();
  React.useEffect(() => {
    const unsub = subscribeFn(() => {
      forceUpdate();
    });
    return () => {
      unsub();
    };
  }, []);
};

export const useDispatch = () => {
  const { dispatch, subscribe } = React.useContext(MyReactReduxContext);
  useForceUpdateWith(subscribe);
  return dispatch;
};

export const useSelector = (mapStateFn) => {
  const { getState, subscribe } = React.useContext(MyReactReduxContext);
  useForceUpdateWith(subscribe);
  return mapStateFn(getState());
};

export class MyProvider extends React.Component {
  render() {
    return (
      <MyReactReduxContext.Provider value={this.props.store}>
        {this.props.children}
      </MyReactReduxContext.Provider>
    );
  }
}

// export function myConnect(mapStateToProps, mapDispatchToProps) {
//   return function (WrappedComponent) {
//     return class NewComponent extends React.Component {
//       static contextType = MyReactReduxContext;
//       componentDidMount() {
//         const { subscribe } = this.context;
//         this.unsubscribe = subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { getState, dispatch, subscribe } = this.context;

//         const passStateToProps = mapStateToProps(getState());
//         const passDipatchToProps = mapDispatchToProps(dispatch);
//         console.log("context", this.context);
//         return (
//           <WrappedComponent
//             {...this.props}
//             {...passStateToProps}
//             {...passDipatchToProps}
//           ></WrappedComponent>
//         );
//       }
//     };
//   };
// }
