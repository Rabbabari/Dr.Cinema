import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

// Function to format genres into a comma-separated string.
const formatGenres = (genres) => {
	return genres.map((genre) => genre.Name).join(", ");
};

// MovieThumbnail component for displaying a brief overview of a movie.
const MovieThumbnail = ({
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
	const { navigate } = useNavigation(); // Hook to access navigation functionality.

	const photo = { uri: URL }; // Constructs the source object for the movie's image.

	// Renders a touchable thumbnail for each movie.
	return (
		<TouchableOpacity
			onPress={() =>
				navigate("Sýningartímar", {
					movie: {
						id,
						name,
						year,
						URL,
						genres,
						plot,
						durationMinutes,
						showtimes,
					},
					cinemaName,
				})
			}
		>
			<View style={styles.container}>
				<Image style={styles.image} resizeMode="cover" source={photo} />
				<Text style={styles.textName}>{name}</Text>
				<Text style={styles.textDescription}>{year}</Text>
				<Text style={styles.textDescription}>
					{formatGenres(genres)}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default MovieThumbnail;
