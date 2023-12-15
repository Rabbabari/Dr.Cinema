import React from "react";
import { View, Text } from "react-native";

import { WebView } from "react-native-webview";
// import { Video } from "expo-av";
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
	console.log(trailer);

	return (
		<View style={styles.container}>
			<WebView
				source={{
					uri: trailer,
				}}
			/>
		</View>
	);
};

export default Trailer;
