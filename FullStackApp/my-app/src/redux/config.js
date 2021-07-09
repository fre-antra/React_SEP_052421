import { createStore, combineReducers, compose, applyMiddleware} from "redux";
import postsReducer from "./ducks/posts";

import thunk from 'redux-thunk'

const reducers = combineReducers({
    posts: postsReducer,
})


const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store