import { View, FlatList } from "react-native";
import UpcomingThumbnail from "../UpcomingThumbnail";

const UpcomingList = ({ movies }) => {
	return (
		<View style={styles.cinemaContainer}>
			<FlatList
				numColumns={1}
				data={cinemas}
				renderItem={({ item }) => <UpcomingThumbnail {...item} />}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			/>
		</View>
	);
};

export default UpcomingList;
