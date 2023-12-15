import { View } from "react-native";
import UpcomingInfo from "../../components/UpcomingInfo";
import styles from "../../styles/viewStyle";
import Trailer from "../../components/Trailer";

// UpcomingDetails view for displaying detailed information about an upcoming movie.
const UpcomingDetails = ({ route }) => {
	const movie = route.params; // Extracts movie details from the route parameters.

	// Renders detailed information about the upcoming movie.
	return (
		<View style={styles.containerOne}>
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
