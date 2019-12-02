import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import React from "react"
// import {
//     Image
// } from 'react-native'
import * as Types from "../base/types"
import * as Screens from "../base/index"
import colors from "../common/configs/colors"
// import images from "../../configs/images"

//TABBAR SCREEN
const HomeNavigator = createStackNavigator(
    {
        [Types.HOME_SCREEN]: {
            screen: Screens.HomeScreen,
            navigationOptions: {
                headerTitle: 'Home',
                headerStyle: {backgroundColor: colors.darkSlateBlue},
                headerTitleStyle: {color: colors.white},
                //headerRight: <MenuButtonHeader/>
            }
        },
    }
)

const MedicinesNavigator = createStackNavigator(
    {
        [Types.MEDICINES_SCREEN]: {
            screen: Screens.MedicinesScreen,
            navigationOptions: {
                headerTitle: 'Medicines',
                headerStyle: {backgroundColor: colors.darkSlateBlue},
                headerTitleStyle: {color: colors.white}
            }
        },
    }
)

const TabNavigator = createBottomTabNavigator(
    {
        [Types.HOME_NAVIGATION]: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel:"HOME"
            }
        },
        [Types.MEDICINES_NAVIGATION]: {
            screen: MedicinesNavigator,
            navigationOptions: {
                tabBarLabel:"MEDICINES"
            }
        }
    },
    {
        // defaultNavigationOptions: ({navigation}) => ({
        //     tabBarIcon: ({tintColor}) => {
        //         const {routeName} = navigation.state;
        //         let iconName
        //         if (routeName === Types.HOME_NAVIGATION) {
        //             iconName = tintColor === colors.lightBlue ? images.home.homeActive : images.home.homeInActive
        //         }
        //         else if (routeName === Types.MEDICINES_NAVIGATION) {
        //             iconName = tintColor === colors.lightBlue ? images.home.healthActive : images.home.healthInActive
        //         }

        //         return <Image source={iconName} 
        //                       style={{width: 24, height: 24}} 
        //                       resizeMode={'contain'}
        //                       color={tintColor}
        //                       />
        //     }
        // }),
        tabBarOptions: {
            activeTintColor: colors.white,
            inactiveTintColor: colors.darkGrey,
            // labelStyle : {...StyleSheets.fontRegular}
            style: {
                backgroundColor: colors.darkSlateBlue,
            },
        },
    }
)

//MAIN
const MainNavigator = createStackNavigator(
    {
        [Types.TAB_NAVIGATION]: {
            screen: TabNavigator,
            navigationOptions: {
                header: null
            },
        },
        [Types.CREATE_NEW_SYMPTOM_SCREEN]: {
            screen: Screens.CreateNewSymptomScreen,
            navigationOptions: {
                headerTitle: 'Create New Symptom',
                headerStyle: {backgroundColor: colors.darkSlateBlue},
                headerTitleStyle: {color: colors.white}
            },
        },
        // [Types.LANDSCAPE_SCREEN]: {
        //     screen: Screens.LandScapeScreen,
        //     navigationOptions: {
        //         header: null
        //     },
        // },
    }
)

export default createAppContainer(MainNavigator)