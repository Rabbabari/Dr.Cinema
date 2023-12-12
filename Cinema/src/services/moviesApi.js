import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
	reducerPath: "moviesApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.kvikmyndir.is/" }),
	endpoints: (builder) => ({
		getMoviebyTitle: builder.query({
			query: (title) => `movies/?title=${title}`,
		}),
		getMovies: builder.query({
			query: () => "movies",
		}),
	}),
});
