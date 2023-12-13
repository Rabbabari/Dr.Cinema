import { View, FlatList } from "react-native";
import CinemaThumbnail from "../CinemaThumbnail";
import styles from "./styles";

const CinemaList = ({ cinemas }) => {
	const Footer = () => <View style={styles.footer}></View>;
	return (
		<View style={styles.cinemaContainer}>
			<FlatList
				numColumns={1}
				data={cinemas}
				renderItem={({ item }) => <CinemaThumbnail {...item} />}
				keyExtractor={(item) => item.name}
				ListFooterComponent={Footer}
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			/>
		</View>
	);
};

export default CinemaList;
