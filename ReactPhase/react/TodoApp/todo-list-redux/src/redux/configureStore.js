import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter";

// 这个combine是把所有的reducer放在一起方便调用查看
const reducers = combineReducers({
    counter: counterReducer
})

// store是共用池，所有的reducer（即state的actions）会储存在这里面
const store = createStore(reducers)

export default store