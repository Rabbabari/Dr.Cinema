import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const formatGenres = (genres) => {
	return genres.map((genre) => genre.Name).join(", ");
};

const MovieThumbnail = ({
	id,
	name,
	year,
	URL,
	genres,
	plot,
	durationMinutes,
	showtimes,
	cinemaName,
}) => {
	const { navigate } = useNavigation();
	const photo = { uri: URL };

	return (
		<TouchableOpacity
			onPress={() =>
				navigate("Sýningartímar", {
					movie: {
						id,
						name,
						year,
						URL,
						genres,
						plot,
						durationMinutes,
						showtimes,
					},
					cinemaName,
				})
			}
		>
			<View style={styles.container}>
				<Image style={styles.image} resizeMode="cover" source={photo} />
				<Text style={styles.textName}>{name}</Text>
				<Text style={styles.textDescription}>{year}</Text>
				<Text style={styles.textDescription}>
					{formatGenres(genres)}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default MovieThumbnail;
