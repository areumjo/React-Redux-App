import { GET_BUS_NUM } from "../actions";

const initialState = {
    busNumber: 70,
    busPosition: [],
    isLoading: false,
    error: ""
}

const busNumReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_BUS_NUM:
            console.log('new number btn clicked, action: ', action, 'action.payload: ', action.payload)
            return {
                ...state,
                busNumber: action.payload
            }
        default:
            return state
        }
}

export default busNumReducer;