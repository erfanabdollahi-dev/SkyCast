import axios from "axios"
import { key } from "../key"
import {WEATHER_FAILURE, WEATHER_REQEUST, WEATHER_SUCCESS} from "./weatherType"

export const weatherRequest = () => {
    return {type: WEATHER_REQEUST}
}

export const weatherSuccess = (data) => {
    return {type: WEATHER_SUCCESS, payload: data}
}
export const weatherFailure = (error) => {
    return {type: WEATHER_FAILURE, payload: error}
}

export const fetchWeatherData = ( lat, lon) => {
    return async (dispatch) => {
        try{
            dispatch(weatherRequest());

            const [currentRes, foreCastRes, airRes] = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`),
                axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`),
                axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`)
                ])
            
            
            const fl = foreCastRes.data.list
            const newForecastList = [fl[0],fl[8],fl[16],fl[24],fl[32]]
            dispatch(weatherSuccess({
                current : currentRes.data,
                forecast: newForecastList,
                air: airRes.data.list[0]
            }))
        }
        catch(err){
            console.log(err);
            dispatch(weatherFailure(err.message))
        }
    }
}