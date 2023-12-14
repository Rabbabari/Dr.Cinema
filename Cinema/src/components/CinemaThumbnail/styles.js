import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	button: {
		backgroundColor: "black",
		alignSelf: "center",
		padding: 17,
		borderWidth: 2,
		borderColor: "white",
		borderRadius: 30,
		width: 300,
		height: 70,
		margin: 10,
		marginVertical: 15,
	},
	textName: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
		paddingLeft: 10,
	},
	textWebsite: {
		color: "white",
		fontSize: 14,
		paddingLeft: 10,
	},
	arrow: {
		alignSelf: "flex-end",
		top: -40,
	},
});

export default styles;
