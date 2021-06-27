import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { watcherSage } from "./saga/rootSaga";
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";

// 这个combine是把所有的reducer放在一起方便调用查看
const reducers = combineReducers({
    counter: counterReducer,
    user: userReducer
})

// create middleware
const sageMiddleware = createSagaMiddleware();

const middleWareArr = [sageMiddleware]


/* -------------- original redux without using redux-saga ------------------*/
// // store是共用池（储存所有的可用API），所有的reducer（即针对各actions的罗技操作）会储存在这里面
// const store = createStore(reducers) 
/* -------------- original redux without using redux-saga ------------------*/


/* -------------- redux-saga ------------------*/
// create store with middlewares, three props: reducer, enhencer, middleware(will run watch sage: listen all redux actions and map into handler )
const store = createStore(reducers,{},applyMiddleware(...middleWareArr))

// setup listener which will moniter all actions for states
sageMiddleware.run(watcherSage)
/* -------------- redux-saga ------------------*/

export default store