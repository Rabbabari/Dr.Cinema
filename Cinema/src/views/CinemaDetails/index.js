import { Text, View, TouchableOpacity } from "react-native";
import { useGetMoviesByCinemaQuery } from "../../services/cinemaApi";
import CinemaInfo from "../../components/CinemaInfo";
import MovieList from "../../components/MovieList";

const CinemaDetails = ({ route }) => {
	const { cinema } = route.params;
	const { data: movies, isLoading, error } = useGetMoviesQuery();

	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}

	// Filter movies based on cinema name
	const filteredMovies = movies.filter(
		(movie) =>
			movie.showtimes &&
			movie.showtimes.some(
				(showtime) =>
					showtime.cinema && showtime.cinema.name === cinema.name
			)
	);

	return (
		<View style={{ flex: 1 }}>
			<CinemaInfo cinema={cinema} />
			<MovieList movies={filteredMovies} />
		</View>
	);
};

export default CinemaDetails;
