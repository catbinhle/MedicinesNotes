import React, {Component} from 'react'
import { connect } from "react-redux"
import { View } from 'react-native'
import {LoginNavigator, MainNavigator} from '../navigators/index'
// import Orientation from 'react-native-orientation-locker'
// import DialogModal from '../../components/DialogModal/DialogModal'
// import LoadingView from '../../components/LoadingView/LoadingView'

class BaseAppContainer extends Component {

  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    //Orientation.lockToPortrait()
  }

  render() {
    const {application} = this.props
    return (
      <View style={{flex: 1}}>
        {
          (application.isLoggined) ? <MainNavigator/> : <LoginNavigator/>
        }
        {/* {application.isLoading && <LoadingView/>} */}
      </View>
    )
  }
}

const mapStateToProps = state => {
	return {
    application: state.application,
    // auth: state.auth
  }
}


export default connect(mapStateToProps, {

})(BaseAppContainer)
