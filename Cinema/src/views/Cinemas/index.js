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

	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}

	const sortedCinemas = [...cinemas].sort((a, b) =>
		a.name.localeCompare(b.name)
	);

	return (
		<View style={{ flex: 1 }}>
			<CinemaList cinemas={sortedCinemas} />
		</View>
	);
};

export default Cinemas;
