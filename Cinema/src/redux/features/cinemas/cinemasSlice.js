import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Example API URL
const API_BASE_URL = "https://api.kvikmyndir.is/";

// Async thunk for fetching cinemas
export const fetchCinemasAsync = createAsyncThunk(
	"cinemas/fetchCinemas",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${API_BASE_URL}theaters`);
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const cinemasSlice = createSlice({
	name: "cinemas",
	initialState: {
		cinemas: [],
		selectedCinema: null,
		status: "idle", // "idle", "loading", "succeeded", "failed"
		error: null,
	},
	reducers: {
		setSelectedCinema: (state, action) => {
			state.selectedCinema = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCinemasAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchCinemasAsync.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.cinemas = action.payload;
			})
			.addCase(fetchCinemasAsync.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

// Selectors
export const selectCinemas = (state) => state.cinemas.cinemas;
export const selectIsLoading = (state) => state.cinemas.status === "loading";
export const selectError = (state) => state.cinemas.error;
export const selectSelectedCinema = (state) => state.cinemas.selectedCinema;
export const selectCinemasStatus = (state) => state.cinemas.status;
export const selectCinemasError = (state) => state.cinemas.error;

export default cinemasSlice.reducer;
