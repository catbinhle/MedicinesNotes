import React, { PureComponent } from 'react'
import {
    View, TouchableHighlight, Text
} from 'react-native'
import styles from './styles'
import colors from '../../configs/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddButtonView extends PureComponent {

    render() {
        const { title, iconName, titleColor, fontWeight, borderWidth, backgroundColor, width, height, event } = this.props
        return (
            <TouchableHighlight 
                onPress={event}
                underlayColor={colors.white}
                style={{width: width, padding: 4}}
            >
                <View style={[styles.container, {backgroundColor: backgroundColor, borderWidth: borderWidth, height: height}]}>
                    <Icon name={iconName} color={'grey'} size={28} style={styles.icon} />
                    <Text style={[styles.label, {color:titleColor, fontWeight: fontWeight}]}>{title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}