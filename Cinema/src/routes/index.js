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
			<Stack.Navigator initialRouteName="Main">
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Cinemas" component={Cinemas} />
				<Stack.Screen name="Upcoming" component={Upcoming} />
				<Stack.Screen name="CinemaDetails" component={CinemaDetails} />
				<Stack.Screen name="MovieDetails" component={MovieDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
