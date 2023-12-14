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


	// Displays a loading message while the data is being fetched.
	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	// Displays an error message if there is an error in data fetching.
	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}

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
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<MovieList
				movies={filteredMovies}
				cinemaName={cinema.name}
				ListHeaderComponent={() => <CinemaInfo cinema={cinema} />}
			/>
		</View>
	);
};

export default CinemaDetails;
