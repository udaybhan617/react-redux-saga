import {call, put, takeEvery} from "redux-saga/effects"
import axios from "axios"
import {fetchUserFailure, fetchUserSuccess} from "./userSlice"

// worker saga

function* fetchUser(action){

    try{
        const res = yield call(axios.get, `https://dummyjson.com/users/${action.payload}`) 
        yield put(fetchUserSuccess(res));
    }catch(err){
        yield put(fetchUserFailure(err.message))
    }

}

// watcher saga

function* watchFetchUser(){
    yield takeEvery("user/fetchUserRequested" , fetchUser)
}

export default watchFetchUser;
