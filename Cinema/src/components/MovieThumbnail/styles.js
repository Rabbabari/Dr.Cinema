import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		width: 200,
		height: 360,
		flex: 1,
		flexDirection: "column",
	},
	image: {
		width: 100,
		height: 250,
		padding: 90,
		margin: 10,
	},
	checkmark: {
		position: "absolute",
		top: 15,
		right: 15,
		fontSize: 16,
	},
	textName: {
		fontWeight: "bold",
		color: "white",
		fontSize: 16,
		textAlign: "center",
		marginHorizontal: 10,
	},
	textDescription: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
		marginHorizontal: 10,
	},
});
