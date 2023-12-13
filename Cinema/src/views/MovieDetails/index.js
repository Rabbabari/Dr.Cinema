import { Text, View, TouchableOpacity, FlatList } from "react-native";
import MovieInfo from "../../components/MovieInfo";

const MovieDetails = ({ route }) => {
	const { movie, cinemaName } = route.params;
	console.log("MovieDetails");
	console.log(movie);
	console.log(cinemaName);

	return (
		<View>
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
