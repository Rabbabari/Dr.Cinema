import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import { cinemaApi } from "../../services/cinema";

export default configureStore({
	reducer: {
		movie: movieReducer,
		user: userReducer,
		[cinemaApi.reducerPath]: cinemaApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(cinemaApi.middleware),
});
