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

// MovieInfo component for displaying detailed movie information.
const MovieInfo = ({
	id,
	name,
	year,
	URL,
	genres,
	plot,
	durationMinutes,
	showtimes,
	cinemaName,
}) => {
	const photo = { uri: URL }; // Photo URL for the movie.

	// Renders the movie information.
	return (
		<ScrollView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Image style={styles.image} resizeMode="cover" source={photo} />
			</View>
			<View style={styles.container}>
				<Text style={styles.movieName}>{name}</Text>
				<Text style={styles.textDescription}>{year}</Text>
				<Text style={styles.textDescription}>{plot}</Text>
				<Text style={styles.textDescription}>
					Lengd kvikmyndar: {durationMinutes} min
				</Text>
				<Text style={styles.textDescription}>
					{formatGenres(genres)}
				</Text>
				<Text style={styles.cinema}>{cinemaName}</Text>
				<Text style={styles.cinemaRoom}>Sýningartími - Salur</Text>
				<View style={styles.showTimes}>
					{showtimes
						.filter(
							(showtime) => showtime.cinema.name === cinemaName
						) // Filters showtimes by cinema.
						.flatMap((showtime) => showtime.schedule) // Flattens the schedules for rendering.
						.map((schedule, index) => (
							<TouchableOpacity
								key={index}
								onPress={
									() => handleClick(schedule.purchase_url) // Handles ticket purchase URL click.
								}
							>
								<Text style={styles.time}>{schedule.time}</Text>
								<Text style={styles.ticket}> Kaupa miða </Text>
							</TouchableOpacity>
						))}
				</View>
			</View>
			<View style={styles.footer}></View>
		</ScrollView>
	);
};

export default MovieInfo;
