import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchCinemasAsync,
	selectCinemas,
	selectIsLoading,
	selectError,
} from "../../redux/features/cinemas/cinemasSlice";
import CinemaList from "../../components/CinemaList";
import styles from "../../styles/viewStyle";

// Cinemas view for displaying a list of cinemas.
const Cinemas = () => {
	const dispatch = useDispatch();
	const cinemas = useSelector(selectCinemas);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchCinemasAsync());
	}, [dispatch]);

	// Sorts the fetched cinemas alphabetically by their name.
	const sortedCinemas = [...cinemas].sort((a, b) =>
		a.name.localeCompare(b.name)
	);

	// Renders the sorted list of cinemas.

	return (
		<View style={styles.containerOne}>
			{isLoading ? (
				<Text style={styles.text}>Loading cinemas...</Text>
			) : error ? (
				<Text style={styles.text}>
					An error occurred: {error.message}
				</Text>
			) : (
				<View style={styles.containerOne}>
					<Text style={styles.text}>
						Veljið kvikmyndahús til að sjá sýningar
					</Text>
					<CinemaList cinemas={sortedCinemas} />
				</View>
			)}
		</View>
	);
};

export default Cinemas;
