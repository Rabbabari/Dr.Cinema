import { View, StyleSheet, Text, Image } from "react-native";
import { useGetCinemasQuery } from "../../services/cinemaApi";
import CinemaList from "../../components/CinemaList";

export function Cinemas({ route }) {
	const { data, isLoading, error } = useGetCinemasQuery();

	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}

	return (
		<View style={{ flex: 1 }}>
			<CinemaList cinemas={data} />
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
