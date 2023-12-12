import { View, StyleSheet, Text, Image } from "react-native";
import { useGetCinemasQuery } from "../../services/cinemaApi";

export function Cinemas({ route }) {
	const { data, isLoading, error } = useGetCinemasQuery();
	console.log({ data, isLoading, error });

	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}

	return (
		<View style={styles.container}>
			{data?.map((cinema) => (
				<View key={cinema.id} style={styles.cinemaCard}>
					<Text style={styles.cinemaName}>{cinema.name}</Text>
					<Text>Address: {cinema.address}</Text>
					<Text>City: {cinema.city}</Text>
					<Text>Phone: {cinema.phone}</Text>
					<Text>Website: {cinema.website}</Text>
					{/* Render HTML content safely */}
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	cinemaCard: {
		marginBottom: 20,
		padding: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
	},
	cinemaName: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
