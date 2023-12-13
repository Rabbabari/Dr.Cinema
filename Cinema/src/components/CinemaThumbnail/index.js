import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const CinemaThumbnail = (item) => {
	const { navigate } = useNavigation();
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => navigate("Sýningar", { cinema: item })}
		>
			<View>
				<Text style={styles.text}>{item.name}</Text>
				<Text style={styles.text}>{item.website}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CinemaThumbnail;
