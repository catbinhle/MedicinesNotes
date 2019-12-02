import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage' 
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from "../reducers"
import rootSaga from "../middleware/sagaEffect"
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['application']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const configStore = () => {
	const store = createStore(
		persistedReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
		//composeWithDevTools(applyMiddleware(networkMiddleware, sagaMiddleware))
	);
	const persistor = persistStore(store)
	sagaMiddleware.run(rootSaga)
	return { store, persistor }
}

export default configStore
