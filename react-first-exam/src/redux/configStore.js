import { combineReducers, createStore } from "redux";
import colorReducer from "./ducks/color";

const reducers = combineReducers({
    color: colorReducer
})

const store = createStore(reducers)


export default store

