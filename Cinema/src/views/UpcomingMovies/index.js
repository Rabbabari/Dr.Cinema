import React from "react";
import { FlatList, View, Text } from "react-native";
import UpcomingList from "../../components/UpcomingList";
import { useGetUpcomingQuery } from "../../services/cinemaApi";

// Upcoming component for displaying a list of upcoming movies.
const Upcoming = ({ route }) => {
	const { data, isLoading, error } = useGetUpcomingQuery(); // Uses a custom hook to fetch data about upcoming movies.

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
	const sortedMovies = [...data].sort(
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
