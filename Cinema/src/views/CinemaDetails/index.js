import { Text, View, TouchableOpacity } from "react-native";
import { useGetMoviesByCinemaQuery } from "../../services/cinemaApi";
import CinemaInfo from "../../components/CinemaInfo";

const CinemaDetails = ({ route }) => {
	const { cinema } = route.params;
	const { data, isLoading, error } = useGetMoviesByCinemaQuery(cinema.name);
	console.log(data);
	if (isLoading) {
		return <Text>Loading data...</Text>;
	}

	if (error) {
		console.error(error); // Logs complete error object to console
		return <Text>Error occurred: {JSON.stringify(error, null, 2)}</Text>;
	}

	// console.log(data);
	return (
		<View style={{ flex: 1 }}>
			<CinemaInfo cinema={cinema} />
		</View>
	);
};

export default CinemaDetails;
