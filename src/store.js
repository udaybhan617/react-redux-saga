import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import userReducer from "./features/user/userSlice"
import userSaga from "./features/user/userSaga"

import projectReducer from "./features/project/projectSlice"
import projectSaga from "./features/project/projextSaga"

// create saga middleware

const sagaMiddleware = createSagaMiddleware();

// configure the store

const store = configureStore({
    reducer:{
        user:userReducer,
        project:projectReducer,
    },
    middleware:(getDefaultMiddlerware)=> getDefaultMiddlerware({
        serializableCheck: false,
      }).concat(sagaMiddleware),
    
    
})

// run saga middleware

sagaMiddleware.run(projectSaga)
sagaMiddleware.run(userSaga)

export default store;