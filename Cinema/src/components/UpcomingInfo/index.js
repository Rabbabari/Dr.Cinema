import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Linking,
	ScrollView,
} from "react-native";
import styles from "./styles";

const formatGenres = (genres) => {
	return genres.map((genre) => genre.Name).join(", ");
};
const formatActors = (actors) => {
	return actors.map((actor) => actor.name).join(", ");
};

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

const UpcomingInfo = ({
	name,
	poster,
	genres,
	plot,
	actors,
	trailers,
	date,
}) => {
	const trailer = getFirstTrailerUrl(trailers);
	const photo = { uri: poster };
	const formattedDate = formatDate(new Date(date));
	const formattedActors = formatActors(actors);
	const formattedGenres = formatGenres(genres);

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
