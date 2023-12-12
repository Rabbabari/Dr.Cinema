import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cinemas: [],
	loading: false,
	error: null,
};

const cinemaSlice = createSlice({
	name: "cinemas",
	initialState,
	reducers: {
		fetchCinemasStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchCinemasSuccess(state, action) {
			state.movies = action.payload;
			state.loading = false;
		},
		fetchCinemasFailure(state, action) {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

export const { fetchCinemasStart, fetchCinemasSuccess, fetchCinemasFailure } =
	cinemaSlice.actions;
export default cinemaSlice.reducer;
