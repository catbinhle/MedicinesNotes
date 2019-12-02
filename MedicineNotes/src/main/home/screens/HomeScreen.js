import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, Dimensions } from 'react-native'
// import * as LoginActions from '../../login/services/login.actions'
// import * as HomeActions from '../services/home.action'
import * as Types from "../../../base/types"
import styles from "./styles"
// import DialogModal from '../../../components/DialogModal/DialogModal'
// import ItemModalView from '../../../components/ItemModalView/ItemModalView'
// import colors from '../../../configs/colors'
import AddButtonView from '../../../common/view/addButtonView/AddButtonView'

// const frame = Dimensions.get('window')

export default class HomeScreen extends Component {

	state = {
	}

	//**** COMPONENT LIFE-CYCLE ****
	componentDidMount() {

	}
	
	render() {
		// const {auth, application} = this.props
		// if (auth.error.message != '') {
		// 	this._errorAlert(auth.error.message)
		// }

		return (
			<ScrollView>
				<View style={styles.container}>
					<AddButtonView 
						title = {'Add new a symptom...'}
						iconName = {'plus'}
						titleColor = {'black'}
						fontWeight = {'500'}
						borderWidth = {1}
						backgroundColor = {'white'}
						width = {'100%'}
						height = {60}
						event = {this._addNewASymptom}
					/>
				</View>
			</ScrollView>
		)
	}

	//**** RENDER SUB-VIEWS ****
    // renderAvatarModalContent = () => (
    //     <View style={[styles.modalContent, { top: 84, left: frame.width - 166}]}>
    //         <ItemModalView event={() => this._openProfile()}
    //             label={"My Account"} />
    //         <ItemModalView event={() => this._signoutClick()}
    //             label={"Sign Out"} />
    //     </View>
	// )
	
	// renderActualModalContent = () => (
    //     <View style={styles.actualContent}>
	// 		<ActualView/>
    //     </View>
    // )

	//**** ACTIONS ****
    // _showDiaglog = (isOpen) => {
    //     this.props.updateMenuHeaderAction(isOpen)
	// }

	_addNewASymptom = () => {
		this.props.navigation.navigate(Types.CREATE_NEW_SYMPTOM_SCREEN)
	}
	
	// _openProfile = () => {
	// 	this.props.updateMenuHeaderAction(false) 
    //     this.props.navigation.navigate(Types.PROFILE_SCREEN)
    // }

    // _signoutClick() {
	// 	this.props.updateMenuHeaderAction(false)
    //     this.props.doLogoutAction()
	// }
	
	// _openMoreView() {
	// 	this.props.navigation.navigate(Types.LANDSCAPE_SCREEN, {view: Types.MORE_VIEW})
	// }

	// _openActual(isActual) {
	// 	this.setState({ isActualView: isActual })
	// }
}

// const mapStateToProps = state => {
// 	return {
// 		home: state.home
// 	}
// }

// export default connect(mapStateToProps, {
// 	...LoginActions,
// 	...HomeActions
// })(HomeScreen)