import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import styles from "./styles";

const formatGenres = (genres) => {
	return genres.map((genre) => genre.Name).join(", ");
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
	//console.log(cinemaName);
	const photo = { uri: URL };
	//console.log(id, name, year, URL, genres, plot, durationMinutes, cinemaName);
	//console.log("MovieInfo");

	return (
		<View>
			<Image style={styles.image} resizeMode='cover' source={photo} />
			<Text>{name}</Text>
			<Text>{year}</Text>
			<Text>{plot}</Text>
			<Text>Lengd kvikmyndar: {durationMinutes} min</Text>
			<Text style={styles.textDescription}>{formatGenres(genres)}</Text>
			<Text style={styles.textDescription}>
				{cinemaName} - Showtimes:
			</Text>
			<View style={styles.showTimes}>
				{showtimes
					.filter((showtime) => showtime.cinema.name === cinemaName)
					.flatMap((showtime) => showtime.schedule)
					.map((schedule, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => handleClick(schedule.purchase_url)}
						>
							<Text>{schedule.time}</Text>
							<Text
								style={{
									color: "blue",
									textDecorationLine: "underline",
								}}
							>
								Buy Tickets
							</Text>
						</TouchableOpacity>
					))}
			</View>
		</View>
	);
};

export default MovieInfo;
