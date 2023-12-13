import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		width: 200,
		flex: 1,
		flexDirection: "column",
	},
	image: {
		width: 100,
		height: 100,
		padding: 90,
		margin: 10,
	},
	textName: {
		fontWeight: "bold",
		fontSize: 16,
		textAlign: "center",
		marginHorizontal: 10,
	},
	textDescription: {
		fontSize: 16,
		textAlign: "center",
		marginHorizontal: 10,
	},
	showTimes: {
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "center",
	},
});
