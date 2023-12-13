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
	);
};

export default Main;
