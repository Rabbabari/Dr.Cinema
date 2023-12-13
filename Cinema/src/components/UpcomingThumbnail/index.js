import { Text, View, TouchableOpacity, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const UpcomingThumbnail = (props) => {
	const { title, releaseDate, poster, trailers } = props;

	const formatDate = (date) => {
		const options = { day: "2-digit", month: "2-digit", year: "numeric" };
		return date.toLocaleDateString("en-GB", options).replace(/\//g, ".");
	};

	const getFirstTrailerUrl = () => {
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

	const handleClick = (url) => {
		Linking.canOpenURL(url)
			.then((supported) => {
				if (supported) {
					Linking.openURL(url);
				} else {
					console.log("Don't know how to open URI: " + url);
				}
			})
			.catch((err) => console.error("An error occurred", err));
	};

	const formattedDate = formatDate(new Date(releaseDate));
	const trailer = getFirstTrailerUrl();

	return (
		<View style={styles.container}>
			<View style={styles.poster}>
				<Image source={{ uri: poster }} style={styles.image} />
			</View>
			<View style={styles.info}>
				<Text style={styles.text}>{title}</Text>
				<Text style={styles.text}>Væntanleg {formattedDate}</Text>
				{trailer && (
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleClick(trailer)}
					>
						<Text style={styles.buttonText}>Trailer</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default UpcomingThumbnail;
