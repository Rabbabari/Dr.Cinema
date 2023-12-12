import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
	const navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity onPress={() => navigation.navigate("Cinemas")}>
				<Text>Cinemas</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("Upcoming")}>
				<Text>Upcoming</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Main;
