import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	movies: [],
	loading: false,
	error: null,
};

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		fetchMoviesStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchMoviesSuccess(state, action) {
			state.movies = action.payload;
			state.loading = false;
		},
		fetchMoviesFailure(state, action) {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } =
	movieSlice.actions;
export default movieSlice.reducer;
