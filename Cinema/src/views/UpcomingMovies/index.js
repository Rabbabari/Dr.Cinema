import React from "react";
import { FlatList, View, Text } from "react-native";
import UpcomingList from "../../components/UpcomingList";
import { useGetUpcomingQuery } from "../../services/cinemaApi";

const Upcoming = ({ route }) => {
	const { data, isLoading, error } = useGetUpcomingQuery();
	console.log("In upcoming view", data, isLoading, error);
	return (
		<View>
			{isLoading ? (
				<Text>Loading movies</Text>
			) : (
				<FlatList
					data={data}
					keyExtractor={(p) => p.name}
					renderItem={({ item }) => <UpcomingList {...item} />}
				/>
			)}
		</View>
	);
};

export default Upcoming;
