import { combineReducers, createStore } from "redux";
import todoReducer from './ducks/todo'

const reducer = combineReducers({
    todolist:todoReducer
})
const store = createStore(reducer)

export default store