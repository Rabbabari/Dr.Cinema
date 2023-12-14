import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
	},
	name: {
		fontSize: 30,
		fontWeight: "bold",
		color: "white",
		marginBottom: 10,
		marginTop: 20,
		marginLeft: 16,
		marginRight: 16,
	},
	description: {
		fontSize: 16,
		color: "white",
		lineHeight: 24,
		marginBottom: 10,
		marginLeft: 16,
		marginRight: 16,
	},
	address: {
		fontSize: 18,
		color: "white",
		marginBottom: 6,
		marginLeft: 16,
	},
	city: {
		fontSize: 18,
		color: "white",
		marginBottom: 6,
		marginLeft: 16,
	},
	phone: {
		fontSize: 18,
		color: "white",
		marginBottom: 6,
		marginLeft: 16,
	},
	website: {
		fontSize: 18,
		color: "#00ffff",
		textDecorationLine: "underline",
		marginBottom: 10,
		marginLeft: 16,
	},
	showMore: {
		fontSize: 16,
		color: "#00ffff",
		textDecorationLine: "underline",
		marginBottom: 8,
		marginLeft: 16,
		alignSelf: "flex-start",
	},
});

export default styles;
