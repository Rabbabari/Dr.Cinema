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
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: {
			width: 7,
			height: 7,
		},
		shadowOpacity: 0.3,
		shadowRadius: 3.84,
	},
	image: {
		width: 150,
		height: 200,
	},
});
