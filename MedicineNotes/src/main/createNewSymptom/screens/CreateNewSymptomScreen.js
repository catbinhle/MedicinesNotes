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
import AddSymptomField from '../../../common/view/addSymptomField/AddSymptomField'
import Buttom from '../../../common/view/button/Button'
import colors from "../../../common/configs/colors"

// const frame = Dimensions.get('window')

export default class CreateNewSymptomScreen extends Component {

	state = {
		symptom: {
			title: '',
			detail: ''
		}
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
                    <AddSymptomField 
                        title = {'Symptom'}
						placeholder = {'enter symptom'}
						event = {this._pushTitleSymptom}
                    />
					<AddSymptomField 
                        title = {'Symptom Detail'}
						placeholder = {'enter symptom detail'}
						event = {this._pushDetailSymptom}
                    />
					<View style={styles.btn}>
						<Buttom
							title = {'Create'} 
							isBorder={true}
							width={'45%'}
							height={44}
							titleColor= {colors.white}
							backgroundColor={colors.navy}
							event={this._createClick}
						/>
					</View>
				</View>
			</ScrollView>
		)
	}

	_pushTitleSymptom = (text) => {
		this.setState({ symptom: {title: text}})
	}

	_pushDetailSymptom = (text) => {
		this.setState({ symptom: {detail: text}})
	}

	_createClick = () => {
		this.props.navigation.goBack(this.state.symptom)
	}
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