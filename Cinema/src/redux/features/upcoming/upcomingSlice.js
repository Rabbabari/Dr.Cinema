import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Example API URL
const API_BASE_URL = "https://api.kvikmyndir.is/";

// Async thunk for fetching upcoming movies
export const fetchUpcomingMoviesAsync = createAsyncThunk(
	"upcoming/fetchUpcomingMovies",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${API_BASE_URL}upcoming`);
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const upcomingSlice = createSlice({
	name: "upcoming",
	initialState: {
		upcomingMovies: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUpcomingMoviesAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchUpcomingMoviesAsync.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.upcomingMovies = action.payload;
			})
			.addCase(fetchUpcomingMoviesAsync.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export const selectUpcomingMovies = (state) => state.upcoming.upcomingMovies;
export const selectUpcomingMoviesStatus = (state) => state.upcoming.status;
export const selectUpcomingMoviesError = (state) => state.upcoming.error;
export const selectIsUpcomingMoviesLoading = (state) =>
	state.upcoming.status === "loading";

export default upcomingSlice.reducer;
