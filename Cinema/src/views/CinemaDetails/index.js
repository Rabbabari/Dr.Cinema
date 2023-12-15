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
import styles from "../../styles/viewStyle";

// CinemaDetails view for displaying the details of a specific cinema.
const CinemaDetails = ({ route }) => {
	const dispatch = useDispatch();
	const cinema = route.params.cinema;
	const movies = useSelector(selectMovies);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectMoviesError);

	useEffect(() => {
		dispatch(fetchMoviesAsync());
	}, [dispatch]);

	// Filters movies based on the selected cinema's name.
	const filteredMovies = movies.filter(
		(movie) =>
			movie.showtimes &&
			movie.showtimes.some(
				(showtime) =>
					showtime.cinema && showtime.cinema.name === cinema.name
			)
	);

	// Renders the MovieList component with filtered movies for the selected cinema.
	return (
		<View style={styles.containerOne}>
			{isLoading ? (
				<Text style={styles.loadingText}>Loading movies...</Text>
			) : error ? (
				<Text style={styles.errorText}>
					An error occurred: {error.message}
				</Text>
			) : (
				<MovieList
					movies={filteredMovies}
					cinemaName={cinema.name}
					ListHeaderComponent={() => <CinemaInfo cinema={cinema} />}
				/>
			)}
		</View>
	);
};

export default CinemaDetails;
