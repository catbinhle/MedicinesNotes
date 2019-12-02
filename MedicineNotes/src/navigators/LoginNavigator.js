import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import * as Types from '../base/types'
import * as Screens from '../base/index'

const LoginNavigator = createStackNavigator(
	{
		[Types.LOGIN_SCREEN]: {
			screen: Screens.LoginScreen,
		},
	},
	{
		initialRouteName: Types.LOGIN_SCREEN,
		headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
	}
)

export default createAppContainer(LoginNavigator)