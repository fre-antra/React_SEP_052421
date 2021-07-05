import React, { useContext, useState, useEffect } from "react";

// React-Redux mainly provide two parts: Provider, Connect

// Provider: takes Redux store & makes all nested component able to access the Redux store
// Make all childern use store, we need use Context to create Provider.
const StoreContext = React.createContext();

export const MyCounterProvider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

// Connent: it connects react component to Redux store
// function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
export const MyConnect = (mapStateToProps, mapDispatchToProps) => {
  return function (WrapperComponent) {
    return function NewComponent(props) {
      // connect to the Context in order to get the store
      const store = useContext(StoreContext);
      const [update, setUpdate] = useState(0);
      // forceUpdate callback fn
      const forceUpdate = () => setUpdate([]);

      //the component dont rerender when State Update, since props of NewComponent are not change
      useEffect(() => {
        const { subscribe } = store;
        subscribe(() => forceUpdate());
      }, []);

      const { getState, dispatch } = store;
      const passStateAsProps = mapStateToProps(getState());
      const passDipatchASProps = mapDispatchToProps(dispatch);

      return (
        <WrapperComponent
          {...props}
          {...passStateAsProps}
          {...passDipatchASProps}
        />
      );
    };
  };
};

// export default MyCounterProvider;






// React-redux also provide useDispatch and useSelector customer hook
// utilized action creator, useSelector, useDispatch

function useForceUpdata() {
  const [tmp, setTmp] = useState(true);
  return () => {
    setTmp([]);
  };
}

const useForceUpdataWith = (subscribe) => {
  const forceUpdate = useForceUpdata(); // return () =>{ setTmp(!tmp)}

  useEffect(() => {
    // subscribe is a fn which invoke setTmp()
    // then return a unsubsctibe fn
    const unsubcribe = subscribe(() => { forceUpdate() })
    
    return () => {
      unsubcribe()
    }
  },[])
};

// useDispatch
export const useDispatch = () => {
  console.log(StoreContext);
  const { dispatch, subscribe } = useContext(StoreContext)
  useForceUpdataWith(subscribe)
  return dispatch
};

// useSelector
export const useSelector = (mapStateFn) => {
  const { getState, subscribe } = useContext(StoreContext);
  useForceUpdataWith(subscribe);
  return mapStateFn(getState());
};
