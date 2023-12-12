import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../resources/logo.png";
import styles from "./styles";

const Main = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Cinemas")}
			>
				<Text style={styles.buttonText}>Cinemas</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Upcoming")}
			>
				<Text style={styles.buttonText}>Upcoming</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Main;
