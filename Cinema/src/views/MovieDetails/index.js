import { View } from "react-native";
import MovieInfo from "../../components/MovieInfo";
import styles from "../../styles/viewStyle";

// MovieDetails view for displaying detailed information about a specific movie.
const MovieDetails = ({ route }) => {
	const { movie, cinemaName } = route.params; // Extracts movie and cinemaName from the route parameters.

	// Renders the detailed information of a movie.
	return (
		<View style={styles.containerOne}>
			<MovieInfo
				id={movie.id}
				name={movie.name}
				year={movie.year}
				URL={movie.URL}
				genres={movie.genres}
				plot={movie.plot}
				durationMinutes={movie.durationMinutes}
				showtimes={movie.showtimes}
				cinemaName={cinemaName}
			/>
		</View>
	);
};

export default MovieDetails;
