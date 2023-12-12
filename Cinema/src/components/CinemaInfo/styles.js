import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	name: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#333",
		marginBottom: 8,
		marginTop: 16, // Added top margin
		marginLeft: 10, // Added left margin
	},
	description: {
		fontSize: 16,
		color: "#666",
		lineHeight: 24,
		marginBottom: 8,
		marginLeft: 10, // Added left margin
	},
	address: {
		fontSize: 18,
		color: "#444",
		marginBottom: 4,
		marginLeft: 10, // Added left margin
	},
	city: {
		fontSize: 18,
		color: "#444",
		marginBottom: 4,
		marginLeft: 10, // Added left margin
	},
	phone: {
		fontSize: 18,
		color: "#444",
		marginBottom: 4,
		marginLeft: 10, // Added left margin
	},
	website: {
		fontSize: 18,
		color: "#0056b3",
		textDecorationLine: "underline",
		marginBottom: 4,
		marginLeft: 10, // Added left margin
	},
});

export default styles;
