import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies/movieSlice";
import cinemaSlice from "./cinemas/cinemaSlice";
import { cinemaApi } from "../../services/cinemaApi";

export default configureStore({
	reducer: {
		movie: movieSlice,
		cinema: cinemaSlice,
		[cinemaApi.reducerPath]: cinemaApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(cinemaApi.middleware),
});
