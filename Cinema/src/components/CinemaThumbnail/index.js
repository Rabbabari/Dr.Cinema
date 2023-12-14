import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

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
				<Text style={styles.textName}>{item.name}</Text>
				<Text style={styles.textWebsite}>{item.website}</Text>
				<AntDesign
					style={styles.arrow}
					name='arrowright'
					size={30}
					color='white'
				/>
			</View>
		</TouchableOpacity>
	);
};

export default CinemaThumbnail;
