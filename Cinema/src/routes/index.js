import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Main from "../views/Main";

// Sets up all the routs in the app
const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Main'>
				<Stack.Screen name='Main' component={Main} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
