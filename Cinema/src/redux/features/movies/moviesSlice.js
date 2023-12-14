import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccessToken } from "../auth/authActions";

const API_BASE_URL = "https://api.kvikmyndir.is/";

// Async thunk for fetching movies
export const fetchMoviesAsync = createAsyncThunk(
	"movies/fetchMovies",
	async (_, { rejectWithValue, getState }) => {
		try {
			const accessToken = getAccessToken(getState());
			const response = await fetch(`${API_BASE_URL}movies`, {
				headers: {
					"x-access-token": accessToken,
				},
			});
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		movies: [],
		selectedMovie: null,
		status: "idle",
		error: null,
	},
	reducers: {
		setSelectedMovie: (state, action) => {
			state.selectedMovie = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMoviesAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchMoviesAsync.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.movies = action.payload;
			})
			.addCase(fetchMoviesAsync.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export const selectMovies = (state) => state.movies.movies;
export const selectSelectedMovie = (state) => state.movies.selectedMovie;
export const selectMoviesStatus = (state) => state.movies.status;
export const selectMoviesError = (state) => state.movies.error;
export const selectIsLoading = (state) => state.movies.status === "loading";

export default moviesSlice.reducer;
