import { StyleSheet } from "react-native";
import colors from "../../../common/configs/colors"
import stylesheets from "../../../common/configs/stylesheets"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addNewSymptom: {
        height: 44,
        width: '95%',       
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.transparent
    },
})

export default styles