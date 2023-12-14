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

// Upcoming component for displaying a list of upcoming movies.
const Upcoming = ({ route }) => {
	const dispatch = useDispatch();
	const upcomingMovies = useSelector(selectUpcomingMovies);
	const isLoading = useSelector(selectIsUpcomingMoviesLoading);
	const error = useSelector(selectUpcomingMoviesError);

	useEffect(() => {
		dispatch(fetchUpcomingMoviesAsync());
	}, [dispatch]);

	// Displays a loading message while the data is being fetched.
	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	// Displays an error message if there is an error in data fetching.
	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}

  // Function to get the release date of a movie.
	const getReleaseDate = (movie) => new Date(movie.releaseDateIS);

	// Sorts the fetched movies by their release date.
  const sortedMovies = [...upcomingMovies].sort(
		(a, b) => getReleaseDate(a) - getReleaseDate(b)
	);
	
// Renders the sorted list of upcoming movies.
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			{isLoading ? (
				<Text>Loading movies</Text>
			) : (
				<UpcomingList movies={sortedMovies} />
			)}
		</View>
	);
};

export default Upcoming;
