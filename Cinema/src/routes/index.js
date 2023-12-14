import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const Stack = createStackNavigator();

import Main from "../views/Main";
import Cinemas from "../views/Cinemas";
import Upcoming from "../views/UpcomingMovies";
import CinemaDetails from "../views/CinemaDetails";
import MovieDetails from "../views/MovieDetails";
import UpcomingDetails from "../views/UpcomingDetail";

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
						headerRight: () => (
							<TouchableOpacity
								onPress={() => navigation.navigate("Forsíða")}
								title="Home"
							>
								<AntDesign
									style={styles.icon}
									name="home"
									size={26}
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
						headerRight: () => (
							<TouchableOpacity
								onPress={() => navigation.navigate("Forsíða")}
								title="Home"
							>
								<AntDesign
									style={styles.icon}
									name="home"
									size={26}
									color="black"
								/>
							</TouchableOpacity>
						),
					})}
				/>
				<Stack.Screen
					name="Nánar"
					component={UpcomingDetails}
					options={({ navigation }) => ({
						headerRight: () => (
							<TouchableOpacity
								onPress={() => navigation.navigate("Forsíða")}
								title="Home"
							>
								<AntDesign
									style={styles.icon}
									name="home"
									size={26}
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
