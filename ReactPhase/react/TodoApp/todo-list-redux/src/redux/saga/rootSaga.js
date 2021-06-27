// create watch saga

import { takeLatest } from "@redux-saga/core/effects";
import { handleGetUser } from "./handler/user";
import { GET_USER } from '../ducks/user'

// funciont*: generator function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// generator can stop in some point when it runs
// generator function will return iterator, use iterator.next() to continue run the generator function
export function* watcherSage() {
    // select action(GET_USER) => handler => get request => return data => update user(setUser)
    yield takeLatest(GET_USER, handleGetUser)
    // yield takeLatest('GET_USER', handleGetUser) // 都可以，因为这就是链接action 和handler的
    // 还有个takeEvery， takeLatest只会拿最后一个，当多个时，前面未完成的call会直接取消
    
}