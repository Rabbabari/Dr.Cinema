import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import cinemasReducer from "./cinemas/cinemasSlice";
import moviesReducer from "./movies/moviesSlice";
import upcomingReducer from "./upcoming/upcomingSlice";

export default configureStore({
	reducer: {
		auth: authReducer,
		cinemas: cinemasReducer,
		movies: moviesReducer,
		upcoming: upcomingReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
