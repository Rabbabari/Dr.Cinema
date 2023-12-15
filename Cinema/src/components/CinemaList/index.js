import { View, FlatList } from "react-native";
import CinemaThumbnail from "../CinemaThumbnail";
import styles from "./styles";

// CinemaList component for rendering a list of cinemas.
const CinemaList = ({ cinemas }) => {
	// Footer component for the FlatList.
	const Footer = () => <View style={styles.footer}></View>;

	// The component renders a FlatList of cinemas.
	return (
		<View style={styles.cinemaContainer}>
			<FlatList
				numColumns={1} // Sets the number of columns for the list
				data={cinemas} // Data source for the list
				renderItem={({ item }) => <CinemaThumbnail {...item} />} // How to render each cinema
				keyExtractor={(item) => item.name} // Unique key for each cinema
				ListFooterComponent={Footer} // Footer component for the list
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			/>
		</View>
	);
};

export default CinemaList;
