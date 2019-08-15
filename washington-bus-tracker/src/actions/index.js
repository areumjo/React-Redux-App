import axios from 'axios';

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

const api_KEY = "e13626d03d8e4c03ac07f95541b3091b";

export const getData = (num) => {
    const routeId = num;
    return dispatch => {
        dispatch({ type: FETCHING_START });
        axios
            .get(`https://api.wmata.com/Bus.svc/json/jBusPositions?api_key=${api_KEY}&RouteID=${routeId}`)
            .then(res => {
                console.log('API data: ', res.data.BusPositions)
                dispatch({
                    type: FETCHING_SUCCESS,
                    payload: res.data.BusPositions
                })
            })
            .catch(err => {
                console.log('API is down: ', err)
                dispatch({
                    type: FETCHING_FAILURE,
                    payload: err.response
                })
            }
        )
    }
}

export const GET_BUS_NUM = "GET_BUS_NUM";

export const getBusNumber = (num) => {
    return dispatch => {
        dispatch({ 
            type: GET_BUS_NUM, payload: num
        })
    }
}