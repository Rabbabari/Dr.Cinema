import { configureStore } from "@reduxjs/toolkit";
// import movieSlice from "./movies/movieSlice";
// import cinemaSlice from "./cinemas/cinemaSlice";
import { cinemaApi } from "../../services/cinemaApi";
import authService from "../../services/authService";

export default configureStore({
	reducer: {
		// movie: movieSlice,
		// cinema: cinemaSlice,
		auth: authService,
		[cinemaApi.reducerPath]: cinemaApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(cinemaApi.middleware),
});
