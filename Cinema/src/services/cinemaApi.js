import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const cinemaApi = createApi({
	reducerPath: "cinemaApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.kvikmyndir.is",
		prepareHeaders: (headers, { getState }) => {
			// Get the token from your Redux store or any other source
			const accessToken =
				"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1NzZjNDk1YzQwNzkzMzZiYzAyNTIzNiIsImlhdCI6MTcwMjM2NzkzNCwiZXhwIjoxNzAyNDU0MzM0fQ.zrVrsgJUWQHDdSilWjP1JoUpnsBfQjigHp0JuHXsEu0";

			if (accessToken) {
				// Add the X-Access-Token header
				headers.set("x-Access-Token", accessToken);
			}

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getCinemas: builder.query({
			query: () => "/theaters",
		}),
		getCinemaByName: builder.query({
			query: (name) => `/theaters/${name}`,
		}),
		getMoviebyTitle: builder.query({
			query: (title) => `/movies/?title=${title}`,
		}),
		getMovies: builder.query({
			query: () => "/movies",
		}),
	}),
});

export const {
	useGetCinemasQuery,
	useGetCinemaByNameQuery,
	useGetMovieByTitleQuery,
	useGetMoviesQuery,
} = cinemaApi;
