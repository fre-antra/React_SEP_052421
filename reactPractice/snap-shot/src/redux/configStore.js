import { createStore, combineReducers } from "redux";
import photosReducer from "./ducks/photos";
import searchReducer from "./ducks/search";

const reducers = combineReducers({
    search: searchReducer,
    photos: photosReducer
})

const store = createStore(reducers)

export default store