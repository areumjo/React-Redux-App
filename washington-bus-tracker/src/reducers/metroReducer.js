import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from "../actions";

const initialState = {
    busNumber: 70,
    busPosition: [],
    isLoading: false,
    error: ""
}

const metroReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START: 
            return {
                ...state,
                isLoading: true,
                err: ""
            }

        case FETCHING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                err: "",
                busPosition: action.payload
            }

        case FETCHING_FAILURE:
            return {
                ...state,
                isLoading: false,
                err: "Error getting data",
            }
            
        default:
            return state;
    }
}

export default metroReducer;