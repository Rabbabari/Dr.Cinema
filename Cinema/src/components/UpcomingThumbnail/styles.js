import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flexDirection: "row", // Set flexDirection to "row" to align items horizontally
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		marginBottom: 10,
	},
	info: {
		flex: 1,
		alignItems: "center",
	},
	poster: {
		marginLeft: 10,
	},
	text: {
		margin: 10,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 20,
	},
	buttonText: {
		// margin: 13,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 20,
	},
	button: {
		backgroundColor: "white",
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderWidth: 0,
		borderColor: "black",
		borderRadius: 24,
		width: 150,
		height: 40,
		elevation: 5,
	},
	image: {
		width: 150,
		height: 200,
	},
});
