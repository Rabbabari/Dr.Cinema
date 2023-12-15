import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchUpcomingMoviesAsync,
	selectUpcomingMovies,
	selectIsUpcomingMoviesLoading,
	selectUpcomingMoviesError,
} from "../../redux/features/upcoming/upcomingSlice";
import UpcomingList from "../../components/UpcomingList";
import styles from "../../styles/viewStyle";

// Upcoming component for displaying a list of upcoming movies.
const Upcoming = () => {
	const dispatch = useDispatch();
	const upcomingMovies = useSelector(selectUpcomingMovies);
	const isLoading = useSelector(selectIsUpcomingMoviesLoading);
	const error = useSelector(selectUpcomingMoviesError);

	useEffect(() => {
		dispatch(fetchUpcomingMoviesAsync());
	}, [dispatch]);

	// Function to get the release date of a movie.
	const getReleaseDate = (movie) => new Date(movie.releaseDateIS);

	// Sorts the fetched movies by their release date.
	const sortedMovies = [...upcomingMovies].sort(
		(a, b) => getReleaseDate(a) - getReleaseDate(b)
	);

	// Renders the sorted list of upcoming movies.
	return (
		<View style={styles.containerOne}>
			{isLoading ? (
				<Text style={styles.loadingText}>Loading movies...</Text>
			) : error ? (
				<Text style={styles.errorText}>
					An error occurred: {error.message}
				</Text>
			) : (
				<UpcomingList movies={sortedMovies} />
			)}
		</View>
	);
};

export default Upcoming;
