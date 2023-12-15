import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../redux/features/auth/authActions";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../resources/logo.png";
import styles from "../../styles/viewStyle";

// Main view, serving as the landing or home screen.
const Main = () => {
	const navigation = useNavigation(); // Hook to access navigation functionality.
	const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store.
	const accessToken = useSelector((state) => state.auth.accessToken); // Retrieves the access token from the Redux store.

	// useEffect hook to fetch the token if it's not present in the Redux store.
	useEffect(() => {
		if (!accessToken) {
			dispatch(fetchToken());
		}
	}, [accessToken, dispatch]);

	// Renders the main screen.
	return (
		<View style={styles.containerOne}>
			<Image source={logo} style={styles.logo} />
			<View style={styles.containerTwo}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Kvikmyndahús")}
				>
					<Text style={styles.buttonText}>Kvikmyndahús</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Væntanlegt")}
				>
					<Text style={styles.buttonText}>Væntanlegt</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Main;
