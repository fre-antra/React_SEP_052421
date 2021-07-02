import React, { useContext, useState, useEffect } from "react";

// React-Redux mainly provide two parts: Provider, Connect

// Provider: takes Redux store & makes all nested component able to access the Redux store
// Make all childern use store, we need use Context to create Provider.
const StoreContext = React.createContext();

const MyCounterProvider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};


// Connent: it connects react component to Redux store
// function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

export const MyConnect = (mapStateToProps, mapDispatchToProps) => {
  return function WrapperComponent() {
    return function NewComponent(props) {
      // connect to the Context in order to get the store
      const store = useContext(StoreContext);
      const [update, setUpdate] = useState(0);
      // forceUpdate callback fn
        const forceUpdate = () => setUpdate([]);


        useEffect(() => {
            const { subscribe } = store
            subscribe(() => forceUpdate());
        }, [])
        
        const { getState, dispatch } = store
        const passStateAsProps = mapStateToProps(getState());
        const passDipatchASProps = mapDispatchToProps(dispatch);

        return (
            <WrapperComponent {...props} {...passStateAsProps} {...passDipatchASProps}/>
        )
        
    };
  };
};


export default MyCounterProvider