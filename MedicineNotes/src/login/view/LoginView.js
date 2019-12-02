import React, {Component} from 'react'
import {
    TouchableWithoutFeedback, Image, Text, View, 
    Keyboard, ScrollView, SafeAreaView
} from 'react-native'
import images from "../../common/configs/images"
import LoginForm from "./LoginForm"
import styles from "./styles"

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)
export default class LoginView extends Component {
    render() {
        const {doLoginAction} = this.props

        const contentLogin = () => (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image style={{width: '90%', height: 200}} resizeMode={'stretch'} 
                            source={images.login.logo}/>
                        </View>
                        <View style={styles.labelContainer}>
                            <Text style={styles.textLabel}>MEDICINES NOTES</Text>
                        </View>
                        <View style={styles.loginContainer}>
                            <LoginForm 
                                doLoginAction={doLoginAction}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
        return (
            <DismissKeyboard>
                <View style={styles.container}>
                    {contentLogin()}
                </View>
            </DismissKeyboard>
        )
    }
}