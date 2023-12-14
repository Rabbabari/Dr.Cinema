import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchMoviesAsync,
	selectMovies,
	selectIsLoading,
	selectMoviesError,
} from "../../redux/features/movies/moviesSlice";
import CinemaInfo from "../../components/CinemaInfo";
import MovieList from "../../components/MovieList";

const CinemaDetails = ({ route }) => {
	const dispatch = useDispatch();
	const cinema = route.params.cinema;
	const movies = useSelector(selectMovies);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectMoviesError);

	useEffect(() => {
		dispatch(fetchMoviesAsync());
	}, [dispatch]);

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
			<MovieList
				movies={filteredMovies}
				cinemaName={cinema.name}
				ListHeaderComponent={() => <CinemaInfo cinema={cinema} />}
			/>
		</View>
	);
};

export default CinemaDetails;
