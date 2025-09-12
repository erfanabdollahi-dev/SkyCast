import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./search/searchReducer";
import { weatherReducer } from "./weather/weatherReducer";


const store = configureStore({
    reducer : {
        search : searchReducer,
        weather : weatherReducer,
    }
})



export default store;