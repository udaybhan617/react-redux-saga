import {call, put, takeEvery} from "redux-saga/effects"
import axios from "axios"
import { fetchProjectSuccess, fetchProjectFailure } from "./projectSlice"

// create worker saga

function* fetchProject(action){
    console.log("I am here!")
    try{
        const res = yield call(axios.get, "https://dummyjson.com/products");
        yield put(fetchProjectSuccess(res))

    }catch(error){
        yield put(fetchProjectFailure(error.message))
    }
}

// watcher saga

function* watchProjectSaga(){
    yield takeEvery("project/fetchProjectRequested", fetchProject)
}

export default watchProjectSaga;