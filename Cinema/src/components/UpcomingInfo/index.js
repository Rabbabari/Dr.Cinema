import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Linking,
	ScrollView,
} from "react-native";
import styles from "./styles";

// Function to format genres into a comma-separated string.
const formatGenres = (genres) => {
	return genres.map((genre) => genre.Name).join(", ");
};

// Function to format actors into a comma-separated string.
const formatActors = (actors) => {
	return actors.map((actor) => actor.name).join(", ");
};

// Function to format the date into a specific string format.
const formatDate = (date) => {
	const options = { day: "2-digit", month: "2-digit", year: "numeric" };
	return date.toLocaleDateString("en-GB", options).replace(/\//g, ".");
};

// Function to get the URL of the first trailer.
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

// Function to handle opening URLs.
const handleClick = (url) => {
	Linking.canOpenURL(url)
		.then((supported) => {
			if (supported) {
				Linking.openURL(url);
			} else {
				console.log("Don't know how to open URI: " + url);
			}
		})
		.catch((err) => console.error("An error occurred", err));
};

// UpcomingInfo component for displaying detailed information about an upcoming movie.
const UpcomingInfo = ({
	name,
	poster,
	genres,
	plot,
	actors,
	trailers,
	date,
}) => {
	const trailer = getFirstTrailerUrl(trailers); // Fetches the first trailer URL.
	const photo = { uri: poster }; // Constructs the source object for the movie's poster image.
	const formattedDate = formatDate(new Date(date)); // Formats the release date.
	const formattedActors = formatActors(actors); // Formats the actors list.
	const formattedGenres = formatGenres(genres); // Formats the genres list.

	// Renders the detailed information of the upcoming movie.
	return (
		<ScrollView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Image style={styles.image} resizeMode="cover" source={photo} />
			</View>
			<View style={styles.container}>
				<Text style={styles.movieName}>{name}</Text>
				<Text style={styles.textDescription}>{formattedDate}</Text>
				{trailer && (
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleClick(trailer)}
					>
						<Text style={styles.buttonText}>Trailer</Text>
					</TouchableOpacity>
				)}
				<Text style={styles.textDescription}>{plot}</Text>
				<Text style={styles.textDescription}>{formattedGenres}</Text>
				<Text style={styles.textDescription}>{formattedActors}</Text>
			</View>
			<View style={styles.footer}></View>
		</ScrollView>
	);
};

export default UpcomingInfo;
