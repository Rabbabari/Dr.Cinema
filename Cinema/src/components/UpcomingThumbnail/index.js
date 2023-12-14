import { Text, View, TouchableOpacity, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

// Function to format the release date of the movie.
const formatDate = (date) => {
	const options = { day: "2-digit", month: "2-digit", year: "numeric" };
	return date.toLocaleDateString("en-GB", options).replace(/\//g, ".");
};

// Function to retrieve the URL of the first trailer.
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

// UpcomingThumbnail component for displaying brief information about an upcoming movie.
const UpcomingThumbnail = (item) => {
	const { navigate } = useNavigation(); // Hook to access navigation functionality.

	const title = item.title; // Movie title.
	const formattedDate = formatDate(new Date(item["release-dateIS"])); // Formatted release date of the movie.
	const poster = item.poster; // Movie poster URL.
	const trailer = getFirstTrailerUrl(item.trailers); // First trailer URL, if available.

	// Renders a view with movie poster, title, release date, and a button for details.
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
