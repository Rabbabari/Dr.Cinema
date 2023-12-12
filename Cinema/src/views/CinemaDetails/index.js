import { Text, View, TouchableOpacity } from "react-native";
import { useGetMoviesByCinemaQuery } from "../../services/cinemaApi";

const CinemaDetails = ({ route }) => {
	const { name } = route.params;
	console.log(name);
	const { data, isLoading, error } = useGetMoviesByCinemaQuery(name);
	console.log(data, isLoading, error);

	return <Text>Cinema Detail</Text>;
};

export default CinemaDetails;
