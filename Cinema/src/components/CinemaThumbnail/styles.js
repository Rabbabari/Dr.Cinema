import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	button: {
		backgroundColor: "white",
		padding: 17,
		borderWidth: 0.17,
		borderColor: "black",
		borderRadius: 24,
		width: 300,
		height: 70,
		margin: 10,
		marginVertical: 15,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: {
			width: 7,
			height: 7,
		},
		shadowOpacity: 0.3,
		shadowRadius: 3.84,
	},
	text: {
		color: "black",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default styles;
