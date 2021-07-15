import { createStore, combineReducers, compose, applyMiddleware} from "redux";
import postsReducer from "./ducks/posts";
import authReducer from "./ducks/auth";
import errorReducer from "./ducks/error";

import thunk from 'redux-thunk'

const reducers = combineReducers({
    posts: postsReducer,
    auths: authReducer,
    error: errorReducer,
})


const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store