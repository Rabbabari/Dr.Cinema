import { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export function Cinemas({ route }) {
	const dispatch = useDispatch();
	const cinema = useSelector((state) => state.cinema);
	const { id } = route.params;

	useEffect(() => {
		dispatch(getCinemaById(id));
	}, [id]);

	return (
		<View style={styles.container}>
			{cinema.selectedCinemaIsLoading ? (
				<Text>Loading data for '{id}'</Text>
			) : (
				<Text>Error occurred: {cinema.seletedCinemaError}</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
