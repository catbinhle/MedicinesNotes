import { StyleSheet } from "react-native";
import colors from "../../common/configs/colors"
import stylesheets from "../../common/configs/stylesheets"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    //LoginView
    logoContainer: {
        marginTop: 60,
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelContainer: {
        marginTop: 40,
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'yellow',
    },
    textLabel: {
        //...stylesheets.fontRegular700,
        fontWeight: '600',
        fontSize: 32,
        color: colors.black,
        textAlign: 'center'
    },
    loginContainer: {
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'green',
    },
    //LoginForm
    formContainer: {
        flex: 1,
        width: '80%',
        backgroundColor: colors.white,
        borderRadius: 8,
        borderColor: colors.navy,
        borderWidth: 1
    },
    privacyContainer: {
        flex: 0.3,
        flexDirection: 'row',
    },
    formTextContainer: {
        flexDirection: 'column',
        backgroundColor: "transparent",
        flex: 1,
    },
    textInput: {
        //...stylesheets.fontRegular,
        width: '100%',
        fontSize: 14,
        textAlign: 'center',
        color: colors.black
    },
    textInputLabel: {
        //...stylesheets.fontRegular,
        width: '100%',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: colors.black
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: colors.navy,
        width: "100%"
    },
    loginBtnEnable: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.navy,
        flex: 0.4,
        flexDirection: 'row',
        borderRadius: 8
    },
    loginBtnDisable: {
        opacity: 0.7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.grey,
        flex: 0.5,
        flexDirection: 'row',
        borderRadius: 8
    },
    textSignInButton: {
        //...stylesheets.fontRegular,
        fontSize: 16,
        fontWeight: '600',
        color: colors.white
    }
})

export default styles