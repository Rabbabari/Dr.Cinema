import { Text, View, TouchableOpacity, FlatList } from "react-native";
import UpcomingInfo from "../../components/UpcomingInfo";

const UpcomingDetails = ({ route }) => {
	const movie = route.params;

	return (
		<View style={{ flex: 1 }}>
			<UpcomingInfo
				name={movie.title}
				poster={movie.poster}
				genres={movie.genres}
				plot={movie.plot}
				actors={movie.actors_abridged}
				trailers={movie.trailers}
				date={movie["release-dateIS"]}
			/>
		</View>
	);
};

export default UpcomingDetails;
