import { View, StyleSheet, Text, Image } from "react-native";
import { useGetCinemasQuery } from "../../services/cinemaApi";
import CinemaList from "../../components/CinemaList";
import styles from "../../components/CinemaList/styles";

// Cinemas view for displaying a list of cinemas.
const Cinemas = ({ route }) => {
	const { data, isLoading, error } = useGetCinemasQuery(); // Uses a custom hook to fetch cinemas data.

	// Displays a loading message while the data is being fetched.
	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	// Displays an error message if there is an error in data fetching.
	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}

	// Sorts the fetched cinemas alphabetically by their name.
	const sortedCinemas = [...data].sort((a, b) =>
		a.name.localeCompare(b.name)
	);

	// Renders the sorted list of cinemas.
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<Text style={styles.headerText}>
				Veljið kvikmyndahús til að sjá sýningar
			</Text>
			<CinemaList cinemas={sortedCinemas} />
		</View>
	);
};

export default Cinemas;
