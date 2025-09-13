import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./search/searchReducer";
import { weatherReducer } from "./weather/weatherReducer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./weather/weatherSaga";
import { thunk } from "redux-thunk";

const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer : {
        search : searchReducer,
        weather : weatherReducer,
    },
    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware({thunk: false})
        .concat(thunk)
        .concat(sagaMiddleware)
})



sagaMiddleware.run(watcherSaga)

export default store;