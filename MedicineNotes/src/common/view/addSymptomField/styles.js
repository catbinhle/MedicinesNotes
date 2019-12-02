import { StyleSheet } from "react-native"
import colors from '../../configs/colors'

const styles = StyleSheet.create({
    container: {
        margin: 8, 
        borderColor: colors.grey,
        justifyContent: 'space-between', 
        alignItems: "flex-start"
    },
    label: {
        fontSize: 18,
        color: colors.black,
        textAlign: 'left',
        fontWeight: '400'
    },
    textInput: {
        top: 8,
        borderRadius: 4,
        borderWidth: 0.5,
        width: '100%',
        padding: 8,
        fontSize: 16,
        textAlign: 'left'
    }
})

export default styles