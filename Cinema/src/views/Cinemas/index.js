import { View, StyleSheet, Text, Image } from "react-native";
import { useGetCinemasQuery } from "../../services/cinemaApi";
import CinemaList from "../../components/CinemaList";
import styles from "../../components/CinemaList/styles";

const Cinemas = ({ route }) => {
	const { data, isLoading, error } = useGetCinemasQuery();
	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	if (error) {
		return <Text>Error occurred: {error.toString()}</Text>;
	}

	const sortedCinemas = [...data].sort((a, b) =>
		a.name.localeCompare(b.name)
	);
	return (
		<View style={{ flex: 1 }}>
			<Text style={styles.headerText}>
				Veljið kvikmyndahús til að sjá sýningar
			</Text>
			<CinemaList cinemas={sortedCinemas} />
		</View>
	);
};

export default Cinemas;
