import { View, FlatList } from "react-native";
import styles from "./styles";
import MovieThumbnail from "../MovieThumbnail";

// MovieList component for rendering a list of movies.
const MovieList = ({ movies, cinemaName, ListHeaderComponent }) => {
	// Footer component for the FlatList.
	const Footer = () => <View style={styles.footer}></View>;

	// Renders a FlatList of movies.
	return (
		<View style={styles.listContainer}>
			<FlatList
				numColumns={2}
				data={movies}
				renderItem={({
					item: {
						id,
						title,
						year,
						poster,
						genres,
						plot,
						durationMinutes,
						showtimes,
					},
				}) => {
					return (
						<MovieThumbnail
							id={id}
							name={title}
							year={year}
							URL={poster}
							genres={genres}
							plot={plot}
							durationMinutes={durationMinutes}
							showtimes={showtimes}
							cinemaName={cinemaName}
						/>
					);
				}}
				keyExtractor={(movie) => movie.id.toString()}
				ListHeaderComponent={ListHeaderComponent}
				ListFooterComponent={Footer}
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			/>
		</View>
	);
};

export default MovieList;
