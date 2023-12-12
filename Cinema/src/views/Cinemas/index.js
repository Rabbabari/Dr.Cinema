import { View, StyleSheet, Text, Image } from "react-native";
import { useGetCinemasQuery } from "../../services/cinemaApi";
import CinemaList from "../../components/CinemaList";

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
			<CinemaList cinemas={sortedCinemas} />
		</View>
	);
};

export default Cinemas;
