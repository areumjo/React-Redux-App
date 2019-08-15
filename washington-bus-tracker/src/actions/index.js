import axios from 'axios';

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

const api_KEY = "e13626d03d8e4c03ac07f95541b3091b";

export const getData = () => {
    const routeId = 70;
    return dispatch => {
        dispatch({ type: FETCHING_START });
        axios
            .get(`https://api.wmata.com/Bus.svc/json/jBusPositions?api_key=${api_KEY}&RouteID=${routeId}`)
            .then(res => {
                console.log('API data: ', res)
                dispatch({
                    type: FETCHING_START,
                    payload: res.data.data
                })
            })
            .catch(err => {
                console.log('API is down: ', err)
                dispatch({
                    type: FETCHING_FAILURE,
                    payload: err.response
                })
            })
    }
}