import axios from "axios"
import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./searchType"
import { key } from "../key"



const searchRequest = ()=>{
    return {
        type:SEARCH_REQUEST,
    }
}
const searchSuccess = (data)=>{
    return {
        type:SEARCH_SUCCESS,
        payload: data 
    }
}
const searchFailure = (data)=>{
    return {
        type:SEARCH_FAILURE,
        payload : data
    }
}



export const searchCity = (query)=>{

    return dispatch=>{
        dispatch(searchRequest());
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=15&appid=${key}`)
        .then(res=>{
            console.log(res.data);
            
            dispatch(searchSuccess(res.data))
        })
        .catch(err=>{
            dispatch(searchFailure(err.message))
        })
    }
}