import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Main from "../views/Main";
import Cinemas from "../views/Cinemas";
import Upcoming from "../views/UpcomingMovies";
import CinemaDetails from "../views/CinemaDetails";
import MovieDetails from "../views/MovieDetails";

// Sets up all the routs in the app
const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Forsíða">
				<Stack.Screen name="Forsíða" component={Main} />
				<Stack.Screen name="Kvikmyndahús" component={Cinemas} />
				<Stack.Screen name="Væntanlegt" component={Upcoming} />
				<Stack.Screen name="Sýningar" component={CinemaDetails} />
				<Stack.Screen name="Sýningartímar" component={MovieDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
