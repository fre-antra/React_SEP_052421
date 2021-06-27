// handler is connect watcher saga(rootSaga) to actural request
// it handle calls function to make request

import { call, put } from "@redux-saga/core/effects";
import { setUser } from "../../ducks/user";
import { requestGetUser } from "../request/userRquest";


export function* handleGetUser(action) {
    try {
        // yield is the stop point
        const response =yield call(requestGetUser)
        const { data } = response
        
        // put the request data into redux action(setUser aka update the state)
        yield put(setUser(data))
    } catch(err) {
        console.log(err);
    }   
}