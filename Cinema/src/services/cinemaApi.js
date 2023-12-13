import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const username = "Rebekkal22";
const password = "3.Queens";

export const cinemaApi = createApi({
	reducerPath: "cinemaApi",
	baseQuery: fetchBaseQuery({

		baseUrl: "https://api.kvikmyndir.is/",
		prepareHeaders: async (headers, { getState }) => {
			const accessToken = selectAccessToken(getState());
			if (accessToken) {
				headers.set("x-Access-Token", accessToken);
			}

			return headers;
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: () => ({
				url:"authenticate",
				method: "POST",
				body: { username, password },
			}),
			onSuccess: (response, { dispatch }) => {
				const accessToken = response.token;
				dispatch(setAccessToken(accessToken));
			},
		}),
		getCinemas: builder.query({
			query: () => "theaters",
		}),
		getCinemaByName: builder.query({
			query: (name) => `theaters/${name}`,
		}),
		getUpcoming: builder.query({
			query: () => "upcoming",
		}),
		getMovies: builder.query({
			query: () => "/movies",
		}),
		getUpcoming: builder.query({
			query: () => "/upcoming",
		}),
	}),
});

export const {
	useLoginMutation,
	useGetCinemasQuery,
	useGetCinemaByNameQuery,
	useGetMoviesQuery,
	useGetUpcomingQuery,
} = cinemaApi;

const selectAccessToken = (state) => state.auth.accessToken;
const setAccessToken = (token) => ({
	type: "auth/setAccessToken",
	payload: token,
});
