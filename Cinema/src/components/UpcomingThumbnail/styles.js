import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flexDirection: "row",
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
		color: "white",
		margin: 10,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 20,
	},
	buttonText: {
		// margin: 13,
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
	image: {
		width: 150,
		height: 250,
	},
});
