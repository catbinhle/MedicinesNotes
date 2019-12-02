import { combineReducers } from 'redux'
import appReducer from './appReducers'

const rootReducer = combineReducers({
    application: appReducer,
})

export default rootReducer