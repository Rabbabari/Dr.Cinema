import { View, FlatList } from "react-native";
import styles from "./styles";
import MovieThumbnail from "../MovieThumbnail";

const MovieList = ({ movies }) => {
	return (
		<View style={styles.listContainer}>
			<FlatList
				numColumns={2}
				data={movies}
				renderItem={({ item: { id, title, year, poster, genres } }) => {
					return (
						<MovieThumbnail
							id={id}
							name={title}
							year={year}
							URL={poster}
							genres={genres}
						/>
					);
				}}
				keyExtractor={(movie) => movie.id}
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			/>
		</View>
	);
};

export default MovieList;
