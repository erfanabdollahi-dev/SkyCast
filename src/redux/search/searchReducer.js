import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./searchType"

const searchState = {
    data: [],
    loading: false,
    error: ''
}


export const searchReducer = (state = searchState, action)=>{
    switch(action.type){
        case SEARCH_REQUEST:
            return {...state, loading:true }
        case SEARCH_SUCCESS:
            return { ...state,data:action.payload,loading:false, error: ''};
        case SEARCH_FAILURE: 
            return {...state,data: [], loading : false, error : action.payload}

        default:
            return state
    }
}