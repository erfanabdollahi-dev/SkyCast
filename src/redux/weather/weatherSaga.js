import {call, put, takeEvery} from "redux-saga/effects"
import {WEATHER_FAILURE, WEATHER_REQEUST, WEATHER_SUCCESS} from "./weatherType"
import { key } from "../key"
import { current } from "@reduxjs/toolkit"
import axios from "axios"

export const sagaWeatherRequest = (lat, lon) => {
    return {
        type: WEATHER_REQEUST,
        payload: {
            lat,
            lon
        }
    }
}

const sagaWeatherSuccess = (data) => {
    return {type: WEATHER_SUCCESS, payload: data}
}
const sagaWeatherFailure = (error) => {
    return {type: WEATHER_FAILURE, payload: error}
}




const fetchWeatherDataApi = async(lat, lon) => {
    const [currentRes,
        foreCastRes,
        airRes] = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`),
        axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`)
    ])
    

    return {currentRes, foreCastRes, airRes}
}




function* handleGetWeather(action){
    try{
        const {lat,lon}= action.payload
        const {currentRes, foreCastRes, airRes} = yield call(fetchWeatherDataApi, lat,lon)
        const fl = foreCastRes.data.list
        const newForecastList = [fl[0],fl[8],fl[16],fl[24],fl[32]]

        yield put(sagaWeatherSuccess({
            current:currentRes.data,
            forecast: newForecastList,
            air: airRes.data.list[0]
        }))
    }
    catch(error){
        yield put(sagaWeatherFailure(error.message))
    }
}



export function * watcherSaga() {
    yield takeEvery(WEATHER_REQEUST,handleGetWeather)
}
