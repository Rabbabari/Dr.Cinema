import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

import Main from "../views/Main";
import Cinemas from "../views/Cinemas";
import Upcoming from "../views/UpcomingMovies";
import CinemaDetails from "../views/CinemaDetails";
import MovieDetails from "../views/MovieDetails";

// Sets up all the routes in the app
const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Forsíða">
				<Stack.Screen name="Forsíða" component={Main} />
				<Stack.Screen name="Kvikmyndahús" component={Cinemas} />
				<Stack.Screen name="Væntanlegt" component={Upcoming} />
				<Stack.Screen
					name="Sýningar"
					component={CinemaDetails}
					options={({ navigation }) => ({
						title: "Forsíða",
						headerRight: () => (
							<TouchableOpacity
								onPress={() => navigation.navigate("Forsíða")}
								title="Home"
							>
								<AntDesign
									// style={styles.icon}
									name="home"
									size={30}
									color="black"
								/>
							</TouchableOpacity>
						),
					})}
				/>
				<Stack.Screen
					name="Sýningartímar"
					component={MovieDetails}
					options={({ navigation }) => ({
						title: "Forsíða",
						headerRight: () => (
							<TouchableOpacity
								onPress={() => navigation.navigate("Forsíða")}
								title="Home"
							>
								<AntDesign
									// style={styles.icon}
									name="home"
									size={30}
									color="black"
								/>
							</TouchableOpacity>
						),
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
