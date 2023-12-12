import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const CinemaThumbnail = ({ id, name, address, city, phone, website }) => {
	const { navigate } = useNavigation();

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => navigate("CinemaDetails", { name })}
		>
			<View>
				<Text style={styles.text}>{name}</Text>
				<Text style={styles.text}>{website}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CinemaThumbnail;
