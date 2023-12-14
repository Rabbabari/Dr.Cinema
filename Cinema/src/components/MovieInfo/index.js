import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Linking,
	ScrollView,
} from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

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
				<Image style={styles.image} resizeMode='cover' source={photo} />
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
			</View>
			<View style={styles.showTimeContainer}>
				<Text style={styles.cinema}>{cinemaName}</Text>
				<Text style={styles.cinemaRoom}>Sýningartími - Salur</Text>
				<View style={styles.showTimes}>
					{showtimes
						.filter(
							(showtime) => showtime.cinema.name === cinemaName
						)
						.flatMap((showtime) => showtime.schedule)
						.map((schedule, index) => (
							<View key={index}>
								<Text style={styles.time}>{schedule.time}</Text>
								<TouchableOpacity
									onPress={() =>
										handleClick(schedule.purchase_url)
									}
								>
									<Text style={styles.ticket}>
										{" "}
										Kaupa miða{" "}
									</Text>
									<AntDesign
										style={styles.arrow}
										name='arrowright'
										size={30}
										color='white'
									/>
								</TouchableOpacity>
							</View>
						))}
				</View>
			</View>
			<View style={styles.footer}></View>
		</ScrollView>
	);
};

export default MovieInfo;
