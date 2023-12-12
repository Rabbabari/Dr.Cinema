import { Text, View } from "react-native";
import styles from "./styles";

const CinemaInfo = ({ cinema }) => {
	const addressWithTabKey = "address\t";
	const cleanDescription = cinema.description
		? cinema.description
				.replace(/\r\n/g, "\n")
				.replace(/\n\n+/g, "\n")
				.replace(/<[^>]+>/g, "")
				.trim()
		: "No description available.";

	return (
		<View style={{ flex: 1 }}>
			<Text style={styles.name}>{cinema.name}</Text>
			<Text style={styles.description}>{cleanDescription}</Text>
			<Text style={styles.address}>{cinema[addressWithTabKey]}</Text>
			<Text style={styles.city}>{cinema.city}</Text>
			<Text style={styles.phone}>{cinema.phone}</Text>
			<Text style={styles.website}>{cinema.website}</Text>
		</View>
	);
};

export default CinemaInfo;
