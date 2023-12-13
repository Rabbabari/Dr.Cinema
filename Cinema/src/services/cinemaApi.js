import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const username = "Rebekkal22";
const password = "3.Queens";

export const cinemaApi = createApi({
	reducerPath: "cinemaApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.kvikmyndir.is/",
		prepareHeaders: (headers, { getState }) => {
			// Get the token from your Redux store or any other source
			//const accessToken = selectAccessToken(getState());
			const accessToken =
				"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1NzZjNDk1YzQwNzkzMzZiYzAyNTIzNiIsImlhdCI6MTcwMjQ1ODk3NCwiZXhwIjoxNzAyNTQ1Mzc0fQ.y_1QP9gdnY9_YZ2rSpnLg-9QVeIVd-d-RKpSo8IkNNw";

			// console.log("Token for request:", accessToken); // Add logging
			// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1NzZjNDk1YzQwNzkzMzZiYzAyNTIzNiIsImlhdCI6MTcwMjM2NzkzNCwiZXhwIjoxNzAyNDU0MzM0fQ.zrVrsgJUWQHDdSilWjP1JoUpnsBfQjigHp0JuHXsEu0";

			if (accessToken) {
				// Add the X-Access-Token header
				headers.set("x-Access-Token", accessToken);
			}

			return headers;
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: () => ({
				url: baseUrl + "authenticate",
				method: "POST",
				body: { username: username, password: password },
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
		getMoviesByCinema: builder.query({
			query: () => "movies",
			transformResponse: (response, queryArg) => {
				// queryArg is the parameter passed to the query
				const targetCinema = queryArg ? queryArg[0] : null;

				// Assuming response is an array of movies with a 'showtimes' property
				return targetCinema
					? response.filter((movie) =>
							movie.showtimes.some(
								(showtime) =>
									showtime.cinema.name === targetCinema
							)
					  )
					: response;
			},
		}),
		// getMoviebyTitle: builder.query({
		// 	query: (title) => `/movies/?title=${title}`,
		// }),
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
	useGetMoviesByCinemaQuery,
	useGetMoviesQuery,
	useGetUpcomingQuery,
} = cinemaApi;

const selectAccessToken = (state) => state.auth.accessToken;
const setAccessToken = (token) => ({
	type: "auth/setAccessToken",
	payload: token,
});
