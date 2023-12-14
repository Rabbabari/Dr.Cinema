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

const Upcoming = ({ route }) => {
	const dispatch = useDispatch();
	const upcomingMovies = useSelector(selectUpcomingMovies);
	const isLoading = useSelector(selectIsUpcomingMoviesLoading);
	const error = useSelector(selectUpcomingMoviesError);

	useEffect(() => {
		dispatch(fetchUpcomingMoviesAsync());
	}, [dispatch]);

	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}

	const getReleaseDate = (movie) => new Date(movie.releaseDateIS);

	const sortedMovies = [...upcomingMovies].sort(
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
