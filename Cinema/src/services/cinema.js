import { createApi, fetchBashQuery } from "@reduxjs/toolkit/query/react";

export const cinemaApi = createApi({
	reducerPath: "cinemaApi",
	baseQuery: fetchBashQuery({
		baseUrl: "https://api.kvikmyndir.is",
	}),
	endpoints: (builder) => ({
		getCinemas: builder.query({
			query: () => "/theaters",
		}),
		getCinemaByName: builder.query({
			query: (name) => `/theaters/${name}`,
		}),
	}),
});

export const { useGetCinemasQuery, useGetCinemaByIdQuery } = cinemaApi;
