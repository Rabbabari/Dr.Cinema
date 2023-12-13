import { View, FlatList } from "react-native";
import UpcomingThumbnail from "../UpcomingThumbnail";
import styles from "./styles";

const UpcomingList = ({ movies }) => {
	const Footer = () => <View style={styles.footer}></View>;
	return (
		<View style={styles.movieContainer}>
			<FlatList
				numColumns={1}
				data={movies}
				renderItem={({ item }) => (
					<UpcomingThumbnail
						title={item.title}
						releaseDate={item["release-dateIS"]}
						poster={item.poster}
						trailers={item.trailers}
					/>
				)}
				keyExtractor={(item) => item.id}
				ListFooterComponent={Footer}
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			/>
		</View>
	);
};

export default UpcomingList;
