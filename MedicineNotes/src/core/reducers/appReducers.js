import * as ActionTypes from "../actions/appActions";
import {fromJS} from "immutable";

const initState = {
    isConnected: true,
    isLoggined: false,
    isLoading: false
}

const appReducer = (state = initState, action) => {
    const newState = fromJS(state).toJS()
    switch (action.type) {
        case ActionTypes.CHANGE_CONNECTION_STATUS:
            return {
                ...state,
                isConnected: action.isConnected
            }
        case ActionTypes.UPDATE_LOADING_API:
            newState.isLoading = action.isLoading
            break;
        case ActionTypes.LOGGIN_API:
            newState.isLoggined = action.isLoggin
            break;
        default:
            return state
    }
    return newState
}

export default appReducer