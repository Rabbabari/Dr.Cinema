import { View, Text, ScrollView } from "react-native";
import { WebView } from 'react-native-webview';
import styles from "./styles";

// Function to get the URL of the first trailer.
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

const Trailer = ({trailers}) => {
    if (!trailers || trailers.length === 0) {
        return null;
      }
	const trailer = getFirstTrailerUrl(trailers); 

	return (
        // <ScrollView>
            <WebView
                source={{ uri: trailer }}
                style={styles.video}
            />
        // </ScrollView>
        )
};

export default Trailer;
