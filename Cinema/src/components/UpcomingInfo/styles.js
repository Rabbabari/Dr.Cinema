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
		padding: 5,
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
	buttonText: {
		color: "white",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 20,
	},
	button: {
		backgroundColor: "black",
		alignSelf: "center",
		padding: 10,
		borderWidth: 2,
		borderColor: "white",
		borderRadius: 30,
		width: 150,
		height: 50,
		margin: 10,
		marginVertical: 15,
	},
	footer: {
		height: 40,
		backgroundColor: "black",
	},
});
