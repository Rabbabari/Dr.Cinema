import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F5F5F5",
	},
	name: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#333",
		marginBottom: 10,
		marginTop: 20,
		marginLeft: 16,
		marginRight: 16,
	},
	description: {
		fontSize: 16,
		color: "#666",
		lineHeight: 24,
		marginBottom: 10,
		marginLeft: 16,
		marginRight: 16,
	},
	address: {
		fontSize: 18,
		color: "#444",
		marginBottom: 6,
		marginLeft: 16,
	},
	city: {
		fontSize: 18,
		color: "#444",
		marginBottom: 6,
		marginLeft: 16,
	},
	phone: {
		fontSize: 18,
		color: "#444",
		marginBottom: 6,
		marginLeft: 16,
	},
	website: {
		fontSize: 18,
		color: "#0056b3",
		textDecorationLine: "underline",
		marginBottom: 10,
		marginLeft: 16,
	},
	showMore: {
		fontSize: 16,
		color: "#0056b3",
		textDecorationLine: "underline",
		marginBottom: 8,
		marginLeft: 16,
		alignSelf: "flex-start",
	},
});

export default styles;
