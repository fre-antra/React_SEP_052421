import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import Express from './Express'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Express />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// // 7.1 myRedux, myReactRedux
// import { MyCounterProvider } from './redux/myReduxFn/myReactRedux'
// import { myStore, selfStore } from './redux/myReduxFn/myRedux'
// // 7.2 my useDispatch, useSelector
// import ExportConnect, {CounterComponent} from './redux/myReduxFn/AppMyRedux'


// ReactDOM.render(
//   <MyCounterProvider store={selfStore}>
//       <ExportConnect name="Sam"/>
//     <ExportConnect name="John" />
//     <CounterComponent/>
//   </MyCounterProvider>
//   , document.getElementById("root"));
