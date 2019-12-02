import React, { Component } from "react";
import { connect } from "react-redux";
//import { Alert, View } from 'react-native'
import LoginView from "../view/LoginView"
import * as AppActions from '../../core/actions/index'


class LoginScreen extends Component {

	//**** COMPONENT LIFE-CYCLE ****
	render() {
		return (
			<LoginView
				doLoginAction = {this._handleLogging}
			/>
		);
	}

	//**** ACTIONS ****
	_handleLogging = (username, password) => {
		//const {loginForm} = this.props.auth;
		//this.props.doLoginAction(loginForm.username, loginForm.password)
		//his.props.doLoginAction(username, password)
		this.props.logginAPI(true)
	};
}

const mapStateToProps = state => {
	return {
		application: state.application,
	}
}

export default connect(mapStateToProps, {
	...AppActions
})(LoginScreen)