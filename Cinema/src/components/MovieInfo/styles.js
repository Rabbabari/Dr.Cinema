import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
	},
	movieName: {
		fontWeight: "bold",
		fontSize: 30,
		padding: 5,
		textAlign: "center",
		marginHorizontal: 10,
	},
	image: {
		width: 300, // or any desired size
		height: 400,
	},
	textDescription: {
		padding: 5,
		fontSize: 16,
		textAlign: "center",
		marginHorizontal: 10,
	},
	showTimes: {
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 150,
		paddingRight: 150,
	},
	time: {
		fontSize: 20,
		padding: 5,
		textAlign: "center",
		marginHorizontal: 10,
	},
	ticket: {
		fontSize: 16,
		padding: 5,
		textAlign: "center",
		marginHorizontal: 10,
		color: "blue",
		textDecorationLine: "underline",
	},
	cinema: {
		fontWeight: "bold",
		fontSize: 30,
		padding: 5,
		textAlign: "center",
		marginHorizontal: 10,
	},
	cinemaRoom: {
		fontWeight: "bold",
		fontSize: 16,
		padding: 5,
		textAlign: "center",
		marginHorizontal: 10,
	},
});
