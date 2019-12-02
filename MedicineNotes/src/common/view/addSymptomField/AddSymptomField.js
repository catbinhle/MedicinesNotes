import React, { PureComponent } from 'react'
import {
    View, TextInput, Text
} from 'react-native'
import styles from './styles'
import colors from '../../configs/colors'
import * as Strings from '../../configs/strings'

export default class AddSymptomField extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    componentWillUpdate(nextProps) {
        if (this.props.text != nextProps.text) {
            this.setState({
                text: nextProps.text
            })
          }
    }
    
    render() {
        const { title, placeholder } = this.props
        return (
            <View style={styles.container}>
                <Text style={[styles.label, {fontWeight: '600'}]}>{title}</Text>
                <TextInput style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor={colors.grey}
                    multiline={true}
                    //returnKeyType={Strings.Done}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    onEndEditing={(e) => this._onEndEditting(e.nativeEvent.text)}
                />           
            </View>
        )
    }

    _onEndEditting = (text) => {
        this.props.event(text)
    }
}