import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const UpcomingThumbnail = ({ route }) => {
	const { movie } = route.params;
	const { navigate } = useNavigation();

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => console.log("pressed")}
		>
			<View>
				<Text style={styles.text}>{movie.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default UpcomingThumbnail;
