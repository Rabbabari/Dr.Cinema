import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

// CinemaThumbnail component for displaying individual cinema information.
const CinemaThumbnail = (item) => {
	const { navigate } = useNavigation(); // Hook to access the navigation object.

	// Renders a touchable component for each cinema item.
	return (
		<TouchableOpacity
			style={styles.button} // Styles the touchable component.
			onPress={() => navigate("Sýningar", { cinema: item })} // Navigates to the "Sýningar" screen with the cinema item on press.
		>
			<View>
				<Text style={styles.text}>{item.name}</Text>
				<Text style={styles.text}>{item.website}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CinemaThumbnail;
