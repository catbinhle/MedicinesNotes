import { all, fork } from 'redux-saga/effects'
//import { networkSaga } from 'react-native-offline'
// import LoginWatchSources from '../../modules/login/services/login.middleware'
// import HomeWatchSources from '../../modules/home/services/home.middleware'

export default function* rootSaga() {
  yield all([
    //fork(networkSaga, { checkConnectionInterval: 20000 }),
    //
  ])
}