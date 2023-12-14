import { StyleSheet } from "react-native";

export default StyleSheet.create({
	containerOne: {
		flex: 1,
		backgroundColor: "black",
		width: "100%",
	},
	containerTwo: {
		paddingTop: 50,
		alignItems: "center",
		justifyContent: "space-around",
		fontWeight: 100,
	},
	logo: {
		width: "100%",
		height: 350,
	},
	button: {
		backgroundColor: "white",
		paddingVertical: 20,
		paddingHorizontal: 40,
		borderWidth: 0,
		borderColor: "black",
		borderRadius: 24,
		width: 300,
		height: 80,
	},
	buttonText: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},
});
