/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { Provider } from "react-redux"
import configureStore from "./src/core/store/store";
import BaseAppContainer from './src/base/BaseAppContainer'
import { PersistGate } from 'redux-persist/integration/react'

console.disableYellowBox = true
const { store, persistor } = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BaseAppContainer/>
        </PersistGate>   
      </Provider>
        
    );
  }
}
