import { View, FlatList } from "react-native";
import CinemaThumbnail from "../CinemaThumbnail";
import styles from "./styles";

const CinemaList = ({ cinemas }) => {
	return (
		<View style={styles.cinemaContainer}>
			<FlatList
				numColumns={1}
				data={cinemas}
				renderItem={({ item }) => {
					return (
						<CinemaThumbnail
							id={item.id}
							name={item.name}
							address={item.address}
							city={item.city}
							phone={item.phone}
							website={item.website}
						/>
					);
				}}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			/>
		</View>
	);
};

export default CinemaList;
