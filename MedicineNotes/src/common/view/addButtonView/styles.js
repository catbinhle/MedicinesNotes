import { StyleSheet } from "react-native"
import colors from '../../configs/colors'

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderColor: colors.grey,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems:'center'
    },
    icon: {
        left: 8,
    },
    label: {
        left: 16,
        fontSize: 18,
        color: colors.white,
        textAlign: 'center'
    }
})

export default styles