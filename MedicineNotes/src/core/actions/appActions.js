export const CHANGE_CONNECTION_STATUS = '[APP] CHANGE_CONNECTION_STATUS';
export const connectionState = (isConnected) => ({
	type: CHANGE_CONNECTION_STATUS,
	isConnected
})

export const UPDATE_LOADING_API = '[APP] UPDATE_LOADING_API';
export const updateLoadingAPI = (isLoading) => ({
	type: UPDATE_LOADING_API,
	isLoading
})

export const LOGGIN_API = '[APP] LOGGIN_API';
export const logginAPI = (isLoggin) => ({
	type: LOGGIN_API,
	isLoggin
})