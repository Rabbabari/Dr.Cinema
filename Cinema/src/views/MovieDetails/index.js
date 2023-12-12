import { Text, View, TouchableOpacity, FlatList } from "react-native";
import MovieThumbnail from "../../components/MovieThumbnail";

const MovieDetails = (movie) => {
	return (
		<View>
			<Text>Movie Detail</Text>
			<FlatList
				data={movie}
				renderItem={({
					item: {
						title,
						poster,
						plot,
						durationMinutes,
						year,
						genres,
						showtimes,
					},
				}) => {
					return (
						<MovieThumbnail
							title={title}
							poster={poster}
							plot={plot}
							durationMinutes={durationMinutes}
							year={year}
							genres={genres}
							showtimes={showtimes}
						/>
					);
				}}
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			></FlatList>
		</View>
	);
};

export default MovieDetails;
