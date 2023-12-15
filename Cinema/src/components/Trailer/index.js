import React from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import styles from "./styles";

const getFirstTrailerUrl = (trailers) => {
	if (
		trailers &&
		trailers.length > 0 &&
		trailers[0].results &&
		trailers[0].results.length > 0
	) {
		return trailers[0].results[0].url;
	}
	return null;
};

// UpcomingInfo component for displaying detailed information about an upcoming movie.
const Trailer = ({ trailers }) => {
	const trailer = getFirstTrailerUrl(trailers);

	return (
		<View style={styles.container}>
			<Video
				source={{ uri: trailer }}
				style={styles.video}
				useNativeControls
				resizeMode="contain"
			/>
		</View>
	);
};

export default Trailer;
