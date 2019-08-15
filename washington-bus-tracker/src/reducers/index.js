import { combineReducers } from 'redux'
import busReducer from './busReducer'
import metroReducer from './metroReducer'

export default combineReducers({
    busReducer,
    metroReducer
})

