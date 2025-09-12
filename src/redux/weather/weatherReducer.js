import {WEATHER_FAILURE, WEATHER_REQEUST, WEATHER_SUCCESS} from "./weatherType";

const weatherState = {
    current: null,
    forecast: [],
    air: null,
    loading: false,
    error: null
};

export const weatherReducer = (state = weatherState, action) => {

    switch (action.type) {
        case WEATHER_REQEUST:
            return {
                ...state,
                loading: true,
                error: null,
                current: null,
                forecast: [],
                air: null,
            }
        case WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                current: action.payload.current,
                forecast: action.payload.forecast,
                air: action.payload.air
            }

        case WEATHER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                current: null,
                forecast: [],
                air: null,
            }

        default:
            return state;

    }

}