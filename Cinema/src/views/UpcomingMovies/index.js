import React from "react";
import { FlatList, View, Text } from "react-native";
import UpcomingList from "../../components/UpcomingList";
import { useGetUpcomingQuery } from "../../services/cinemaApi";

const Upcoming = ({ route }) => {
	const { data, isLoading, error } = useGetUpcomingQuery();
	// console.log("In upcoming view", data, isLoading, error);
	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}
	const getReleaseDate = (movie) => new Date(movie.releaseDateIS);

	const sortedMovies = [...data].sort(
		(a, b) => getReleaseDate(a) - getReleaseDate(b)
	);
	return (
		<View style={{ flex: 1 }}>
			{isLoading ? (
				<Text>Loading movies</Text>
			) : (
				<UpcomingList movies={sortedMovies} />
			)}
		</View>
	);
};

export default Upcoming;
