import { Text, View, TouchableOpacity, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const formatDate = (date) => {
	const options = { day: "2-digit", month: "2-digit", year: "numeric" };
	return date.toLocaleDateString("en-GB", options).replace(/\//g, ".");
};
const getFirstTrailerUrl = (trailers) => {
	if (
		trailers &&
		trailers.length > 0 &&
		trailers[0].results &&
		trailers[0].results.length > 0
	) {
		return trailers[0].results[0].url;
	}
	return null;
};

const UpcomingThumbnail = (item) => {
	const { navigate } = useNavigation();

	const title = item.title;
	const formattedDate = formatDate(new Date(item["release-dateIS"]));
	const poster = item.poster;
	const trailer = getFirstTrailerUrl(item.trailers);

	return (
		<View style={styles.container}>
			<View style={styles.poster}>
				<Image source={{ uri: poster }} style={styles.image} />
			</View>
			<View style={styles.info}>
				<Text style={styles.text}>{title}</Text>
				<Text style={styles.text}>Væntanleg {formattedDate}</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigate("Nánar", { ...item })}
				>
					<Text style={styles.buttonText}>Nánar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default UpcomingThumbnail;
