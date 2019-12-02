import React, { Component } from "react"
import { View, Text, SectionList } from 'react-native'
import styles from './styles'
// import HeaderSupplyVsOffTake from '../headerSupplyVsOffTake/HeaderSupplyVsOffTake'
// import SupplyVsOffTakeCell from '../SupplyVsOffTakeCell/SupplyVsOffTakeCell'

export default class SymptomView extends Component {

	//**** COMPONENT LIFE-CYCLE ****
	render() {

        const { event, eventCell } = this.props
		return (
			<View style={styles.container}> 
                <SectionList
                        renderSectionHeader={({ section: { title, color } }) => (
                            <HeaderSupplyVsOffTake title={title} pointColor={color} event={event} />
                        )}
                        sections={supplyData}
                        keyExtractor={(item, index) => item + index}
                        refreshing={false}
                        // onRefresh={() => this._()}
                        renderItem={this._renderItem}
                    />
			</View>
		)
    }
    _renderItem = ({ item, index, section: { data }}) => (
        <SupplyVsOffTakeCell 
            title={item.title}
            number={item.number}
            textColor={item.color}
            endCell={index === (data.length - 1) ? true : false}
            event={() => this._pressCell()}
        />
    )
    
    //**** ACTIONS ****
    _pressCell = () => {
        this.props.eventCell()
	}
}