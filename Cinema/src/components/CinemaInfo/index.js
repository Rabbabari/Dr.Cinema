import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

const CinemaInfo = ({ cinema }) => {
	const addressWithTabKey = "address\t";
	const [showFullDescription, setShowFullDescription] = useState(false);

	const cleanDescription = cinema.description
		? cinema.description
				.replace(/\r\n/g, "\n")
				.replace(/\n\n+/g, "\n")
				.replace(/<[^>]+>/g, "")
				.trim()
		: "";

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	const renderDescription = () => {
		if (showFullDescription || cleanDescription.length <= 100) {
			return cleanDescription;
		}
		return `${cleanDescription.substring(0, 100)}...`;
	};

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{cinema.name}</Text>
			<Text style={styles.description}>{renderDescription()}</Text>
			{cleanDescription.length > 100 && (
				<TouchableOpacity onPress={toggleDescription}>
					<Text style={styles.showMore}>
						{showFullDescription ? "Show Less" : "Show More"}
					</Text>
				</TouchableOpacity>
			)}
			<Text style={styles.address}>{cinema[addressWithTabKey]}</Text>
			<Text style={styles.city}>{cinema.city}</Text>
			<Text style={styles.phone}>{cinema.phone}</Text>
			<Text style={styles.website}>{cinema.website}</Text>
		</View>
	);
};

export default CinemaInfo;
