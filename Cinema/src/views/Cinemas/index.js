import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchCinemasAsync,
	selectCinemas,
	selectIsLoading,
	selectError,
} from "../../redux/features/cinemas/cinemasSlice";
import CinemaList from "../../components/CinemaList";
import styles from "../../components/CinemaList/styles";

// Cinemas view for displaying a list of cinemas.
const Cinemas = ({ route }) => {
	const dispatch = useDispatch();
	const cinemas = useSelector(selectCinemas);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchCinemasAsync());
	}, [dispatch]);

	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	// Displays an error message if there is an error in data fetching.
	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}

	// Sorts the fetched cinemas alphabetically by their name.
	const sortedCinemas = [...cinemas].sort((a, b) =>
		a.name.localeCompare(b.name)
	);

	// Renders the sorted list of cinemas.

	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<CinemaList cinemas={sortedCinemas} />
		</View>
	);
};

export default Cinemas;
