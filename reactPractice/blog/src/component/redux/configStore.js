import { createStore, combineReducers } from "redux";
import blogReducer from "./ducks/blogInfo";

const reducers = combineReducers({
    blog: blogReducer
})


const store = createStore(reducers)

export default store