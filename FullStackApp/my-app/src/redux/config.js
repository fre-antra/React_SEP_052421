import { createStore, combineReducers, compose, applyMiddleware} from "redux";
import postsReducer from "./ducks/posts";
import authReducer from "./ducks/auth";

import thunk from 'redux-thunk'

const reducers = combineReducers({
    posts: postsReducer,
    auths: authReducer
})


const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store