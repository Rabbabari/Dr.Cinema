import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
		backgroundColor: "black",
	},
	movieName: {
		color: "white",
		fontWeight: "bold",
		fontSize: 30,
		padding: 10,
		textAlign: "center",
		marginHorizontal: 10,
	},
	image: {
		width: 300,
		height: 400,
	},
	textDescription: {
		color: "white",
		padding: 5,
		fontSize: 16,
		textAlign: "center",
		marginHorizontal: 10,
	},
	showTimeContainer: {
		backgroundColor: "black",
	},
	showTimes: {
		color: "white",
		flexWrap: "wrap",
	},
	time: {
		color: "white",
		fontSize: 30,
		padding: 20,
		marginHorizontal: 10,
	},
	ticket: {
		width: 150,
		borderWidth: 2,
		borderColor: "white",
		borderRadius: 20,
		width: 170,
		position: "absolute",
		left: 200,
		bottom: 15,
		backgroundColor: "black",
		fontSize: 20,
		padding: 5,
		color: "white",
	},
	arrow: {
		position: "absolute",
		left: 330,
		bottom: 18,
	},
	cinema: {
		color: "white",
		fontWeight: "bold",
		fontSize: 30,
		padding: 10,
		marginHorizontal: 10,
	},
	cinemaRoom: {
		color: "white",
		fontWeight: "bold",
		fontSize: 16,
		padding: 5,
		paddingLeft: 10,
		marginHorizontal: 10,
	},
	footer: {
		height: 40,
		backgroundColor: "black",
	},
});
