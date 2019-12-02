import React, { Component } from "react"
import { TextInput, Text, View, TouchableOpacity } from "react-native"
import styles from "./styles"

export default class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        // const { navigate, doLoginAction, loginForm, isLoggined, setLoginFormAction } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.formTextContainer}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", flexDirection: 'row' }}><Text style={styles.textInputLabel}>Username</Text></View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                            <TextInput style={styles.textInput}
                                placeholder="enter account"
                                onChangeText={(text) => this.setState({username: text})}
                                underlineColorAndroid="transparent"
                                //value={isLoggined ? '' : this.props.loginForm.username}
                                placeholderTextColor='darkgrey'
                                returnKeyType='next'
                                onSubmitEditing={() => this.refs.txtPassword.focus()}
                            />
                        </View>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.formTextContainer}>
                        <View style={{ flex: 1, justifyContent:'center', alignItems: "flex-end", flexDirection: 'row' }}><Text style={styles.textInputLabel}>Password</Text></View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <TextInput style={styles.textInput}
                                placeholder="***********"
                                onChangeText={(text) => this.setState({password: text})}
                                underlineColorAndroid="transparent"
                                //value={isLoggined ? '' : this.props.loginForm.password}
                                placeholderTextColor='darkgrey'
                                returnKeyType='go'
                                ref={"txtPassword"}
                                secureTextEntry
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.privacyContainer}></View>
                    <TouchableOpacity 
                        style={styles.loginBtnEnable}
                        style={(!this.state.username || !this.state.password) ? styles.loginBtnDisable : styles.loginBtnEnable}
                            onPress={this._onLogin} 
                        >
                        <Text style={styles.textSignInButton}>LOGIN</Text>
                    </TouchableOpacity>
            </View>
        )
    }

    _onLogin = () => {
        this.props.doLoginAction(this.state.username, this.state.password)
    }
}